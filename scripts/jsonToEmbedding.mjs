import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

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

const jsonFileList = readJsonFiles(path.join(__dirname, '..', 'meta'));

for await (const file of jsonFileList) {
  const json = JSON.parse(fs.readFileSync(file, 'utf-8'));
  console.log(json);
}
