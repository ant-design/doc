import { QdrantClient } from '@qdrant/js-client-rest';
import fs from 'fs';
import { glob } from 'glob';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new QdrantClient({
  url: process.env.QDRANT_API_URL,
  apiKey: process.env.QDRANT_API_KEY,
});

const genEmbedding = async (payload) => {
  const embedding = await openai.embeddings
    .create({
      input: payload.title,
      model: 'text-embedding-ada-002',
    })
    .then((res) => {
      return res.data.at(0)?.embedding;
    });
  return embedding;
};

// 获取当前脚本所在目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));
/**
 * 从目录中读取JSON文件并返回文件路径数组。
 * @param {string} directory - 要读取JSON文件的目录。
 * @returns {string[]} - 文件路径数组。
 */
function readJsonFiles(directory) {
  const files = glob.sync('**/**/*.json', {
    cwd: directory,
    ignore: [
      '**/fixtures/**',
      '**/node_modules/**',
      '**/demo/**',
      '**/examples/**',
      '**/ant-design/docs/spec/**',
      '**/tests/**',
      '**/*$**/**',
    ],
  });
  return files.map((file) => path.join(directory, file));
}

const collectionName = 'test_collection';

const jsonFileList = readJsonFiles(path.join(__dirname, '..', 'meta'));

const initDb = async () => {
  // 获取已存在的集合列表
  let result = await client.getCollections();

  // 提取集合名称
  const collectionNames = result.collections.map(
    (collection) => collection.name,
  );

  // 如果集合已存在，则删除它
  if (collectionNames.includes(collectionName)) {
    await client.deleteCollection(collectionName);
  }

  // 创建新的集合
  await client.createCollection(collectionName, {
    vectors: {
      size: 1536,
      distance: 'Euclid',
    },
    optimizers_config: {
      default_segment_number: 2,
    },
    replication_factor: 2,
  });
  result = await client.getCollections();

  console.log('集合列表:', result.collections);

  // 创建 'text' 字段的索引
  await client.createPayloadIndex(collectionName, {
    field_name: 'text',
    field_schema: 'keyword',
    wait: true,
  });

  // 创建 'url' 字段的索引
  await client.createPayloadIndex(collectionName, {
    field_name: 'url',
    field_schema: 'keyword',
    wait: true,
  });
};

await initDb();
let count = 0;
for await (const file of jsonFileList) {
  count++;
  const json = JSON.parse(fs.readFileSync(file, 'utf-8'));

  let index = 0;
  for await (const api of json) {
    index++;
    const vector = await genEmbedding(api);
    const mdVector = await genEmbedding({
      title: api.md,
    });

    await client.upsert(collectionName, {
      points: [
        {
          id: count * 100 + index * 10 + 1,
          vector,
          payload: {
            text: api.title + '\n' + api.md,
            url: file,
          },
        },
        {
          id: count * 100 + index * 10 + 2,
          vector: mdVector,
          payload: {
            text: api.title + '\n' + api.md,
            url: file,
          },
        },
      ],
    });
  }
}
