import path from 'node:path';
import fs from 'fs';
import makeTree from './makeTree.js';
import parse from './parse.js';
import formatData from './formatters/index.js';

const getData = (fullPath) => fs.readFileSync(fullPath, 'utf-8');
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);

export default (file1, file2, format = 'stylish') => {
  const file1Object = parse(getData(file1), getTypeFile(file1));
  const file2Object = parse(getData(file2), getTypeFile(file2));

  const node = makeTree(file1Object, file2Object);

  return formatData(node, format);
};
