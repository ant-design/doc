import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import parse from 'remark-parse';
import { unified } from 'unified';
import { fileURLToPath } from 'url';
import { readMarkdownFiles } from './readApi.mjs';

// 获取当前脚本所在目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const processor = unified().use(parse);

/**
 * 解析Markdown文件并将其转换为JSON格式。
 * @param {string[]} fileList - 包含Markdown文件路径的数组。
 */
const parseMDAndWrite = (fileList) => {
  fileList.forEach((fileName) => {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    const ast = processor.parse(fileContent);
    let apiJSON = [];
    ast.children.forEach((node) => {
      if (node.type === 'heading' && node.depth === 3) {
        apiJSON.push({
          title: remark.stringify(node)?.replace(/\n/g, '').trim(),
          md: '',
        });
      } else {
        if (apiJSON.at(-1)) {
          let md = apiJSON.at(-1).md;
          md = md + remark.stringify(node);
          apiJSON.at(-1).md = md;
        }
      }
    });

    fs.writeFileSync(
      path.join(
        __dirname,
        '..',
        'meta',
        path.basename(fileName).split('.').at(0) + '.json',
      ),
      JSON.stringify(apiJSON, null, 2),
    );
  });
};

parseMDAndWrite(readMarkdownFiles('./docs'));
