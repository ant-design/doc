import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import parse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'url';

// 获取当前脚本所在目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const processor = unified().use(parse).use(remarkGfm, { singleTilde: false });

/**
 * 解析变更日志并生成CHANGELOG.md文件。
 * @param {string[]} fileList - 文件列表
 * @param {string} packageName - 包名
 */
const parseChangeLog = (fileList, packageName) => {
  fileList.forEach((file) => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    // 解析Markdown为抽象语法树（AST）
    const ast = processor.parse(fileContent);
    // 提取表格数据
    const changelogData = [];
    visit(ast, (node) => {
      if (node.type === 'heading' && node.depth === 2) {
        const versionTitle = remark
          .stringify(node.children[0])
          .replace(/\n/g, '')
          .trim();

        changelogData.push({
          version: versionTitle,
          content: '',
        });
        return;
      }
      if (!changelogData.at(-1)) {
        return;
      }
      if (node.type === 'inlineCode') {
        const time = remark.stringify(node).replace(/\n/g, '').trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(time.replaceAll('`', ''))) {
          changelogData.at(-1).time = time;
        }

        return;
      }
      if (node.type === 'list') {
        changelogData.at(-1).content = remark.stringify(node);
        return;
      }
    });

    const changeMd = changelogData
      .filter((item) => item.content && item.time)
      .map((item) => {
        return `### 在 ${item.time} 更新的 \`${item.version}\` 版本更新了什么？
  
  ${item.content}
  `;
      })
      .join('\n');

    fs.writeFileSync(
      path.join(__dirname, '..', 'docs', packageName, 'CHANGELOG.md'),
      changeMd
    );
  });
};

parseChangeLog(['pro-components/docs/changelog.en-US.md'], 'pro-components');

parseChangeLog(['ant-design/CHANGELOG.zh-CN.md'], 'ant-design');
