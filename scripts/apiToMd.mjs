import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前脚本所在目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const apiPath = path.join(__dirname, '..', 'api');

fs.readdirSync(path.join(__dirname, '..', 'api')).forEach((jsonName) => {
  const json = JSON.parse(fs.readFileSync(path.join(apiPath, jsonName)));
  const packageName = path.basename(jsonName).split('.').at(0);
  const mdFile = json.map((item) => {
    const questionMd = `### ${packageName} 的 ${item.title} 有哪些参数？`;
    const mdList = item.pri?.map((row) => {
      const mdTitle = `### ${packageName} 的 ${row.title} 有哪些参数？`;
      const mdRow = `| ${Object.keys(row.table.at(0)).join(' | ')} |
| --- | --- | --- | --- | --- |
${row.table
  .map((item) => {
    return `| ${Object.values(item)
      .map((apiItem) => apiItem?.toString().replaceAll('|', '\\|'))
      .join(' | ')} |`;
  })
  .join('\n')}

`;
      return {
        md: [mdTitle, mdRow].join('\n\n'),
        tableMd: mdRow,
        title: row.title,
      };
    });

    const answerMd = mdList
      ?.map((item) => {
        return `#### ${item.title} \n\n ${item.tableMd}`;
      })
      .join('\n\n');

    const md = [questionMd, answerMd].join('\n\n');

    return [
      md,
      mdList
        ?.map((item) => {
          return item.md;
        })
        .join('\n\n'),
    ].join('\n\n');
  });

  fs.writeFileSync(
    path.join(__dirname, '..', 'docs', packageName, 'api.md'),
    mdFile.join('\n\n')
  );
});
