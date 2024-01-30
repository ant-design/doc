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
    const questionMd = `## ${packageName} 的 ${item.title} 有哪些配置？`;
    if (item.md) {
      const childMd = item.properties
        ?.map((property) => {
          if (property.property?.length > 0) {
            return `### ${item.title} ${property.title}\n${property.md}\n${property.property
              .map((subItem) => {
                return `#### ${subItem.title}\n${subItem.md}`;
              })
              .join('\n\n')}`;
          }
          return `### ${item.title} ${property.title}\n${property.md}`;
        })
        .join('');

      return [questionMd, childMd].join('\n');
    }
    const mdList = item.properties
      ?.map((row) => {
        if (row.property.length === 0) {
          return null;
        }
        const mdTitle = `### ${packageName} 的 ${row.title} 有哪些配置？`;
        const mdRow = `| ${Object.keys(row.property.at(0)).join(' | ')} |
| ${Object.keys(row.property.at(0))
          .map(() => '---')
          .join(' | ')} |
${row.property
  .map((item) => {
    return `| ${Object.values(item)
      .map((apiItem) => apiItem?.toString().replaceAll('|', '\\|'))
      .join(' | ')} |`;
  })
  .join('\n')}
`;
        return {
          md: [mdTitle, item.md || mdRow].join('\n\n'),
          tableMd: mdRow,
          title: row.title,
        };
      })
      .filter(Boolean);

    const answerMd = mdList
      ?.map((mdListItem) => {
        return `#### ${mdListItem.title} \n\n${mdListItem.tableMd}`;
      })
      .join('\n\n');

    const md = [questionMd, answerMd].filter(Boolean).join('\n\n');

    return [md, mdList?.map((mdListItem) => mdListItem.md).join('\n\n')].join(
      '\n\n',
    );
  });

  fs.writeFileSync(
    path.join(__dirname, '..', 'docs', packageName, 'api.md'),
    mdFile.join('\n\n'),
  );
});
