import OpenAI from 'openai';
import { readMarkdownFiles } from './readApi.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mdFileList = readMarkdownFiles('.');

for await (const file of mdFileList) {
  const mdContent = fs.readFileSync(file, 'utf-8');
  const mdContentArray = mdContent.split('\n#');
  const mdFile = [];
  for await (const section of mdContentArray) {
    if (section.length < 150) continue;
    const jsonContent = await openai.chat.completions
      .create({
        model: 'gpt-3.5-turbo-16k',
        temperature: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 2000,
        stream: false,
        messages: [
          {
            role: 'user',
            content: `
  ${section}
  基于以上信息生成 3个 QA 文档`,
          },
        ],
      })
      .then((res) => {
        return res.choices[0].text;
      });
    mdFile.push(jsonContent);
  }

  fs.mkdirSync(path.dirname(path.join(__dirname, '..', 'doc', file)), {
    recursive: true,
  });
  fs.writeFileSync(
    path.join(__dirname, '..', 'docs', file),
    JSON.stringify(mdFile, null, 2)
  );
}
