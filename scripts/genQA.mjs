import OpenAI from 'openai';
import { readMarkdownFiles } from './readApi.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.openai-proxy.com/v1',
});
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mdFileList = readMarkdownFiles('.');

for await (const file of mdFileList) {
  const mdContent = fs.readFileSync(file, 'utf-8');
  const mdContentArray = mdContent.split('\n#');
  const mdFile = [];
  const newFileName = path.join(__dirname, '..', 'docs', file);
  if (fs.existsSync(newFileName)) continue;

  let i = 0;
  for await (const section of mdContentArray) {
    if (section.length < 150) continue;
    i++;
    console.log(
      '正在处理' + file + ' (' + i + '/' + mdContentArray.length + ')'
    );
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
            role: 'system',
            content: `
你是一个前端开发者，你想要生成一个 QA，生成的效果如下：

"""
例子：
### Ant Design 5.x 的 CSS 变量模式如何使用
            
Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。与 4.x 版本不同的是，这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有 Design Token 纳入了 CSS 变量的管理范畴。这意味着在同一组件中，不同主题下的样式可以共享，从而减少样式体积。此外，切换主题时不再需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。
"""

生成的文档要简洁精确，语义通顺，符合前端开发的基础，输出不要包含《Ant Design 5.x 的 CSS 变量模式如何使用》这个例子，要尽量包含更多的原始文本信息。`,
          },
          {
            role: 'user',
            content: `
  ${section}
基于以上信息生成 3 个 QA 文档
`,
          },
        ],
      })
      .then((res) => {
        return res.choices[0].message.content;
      });

    console.log('生成成功');

    mdFile.push(jsonContent);
    fs.mkdirSync(path.dirname(newFileName), {
      recursive: true,
    });
    fs.writeFileSync(newFileName, mdFile.join('\n\n'));
  }
}
