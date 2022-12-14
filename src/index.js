import path from 'node:path';
import fs from 'fs';
import makeTree from './makeTree.js';
import parse from './parse.js';
import formatData from './formatters/index.js';

const getData = (fullPath) => fs.readFileSync(fullPath, 'utf-8');
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);

export default (file1, file2, format = 'stylish') => {
  const dataFile1 = parse(getData(file1), getTypeFile(file1));
  const dataFile2 = parse(getData(file2), getTypeFile(file2));

  const node = makeTree(dataFile1, dataFile2);

  return formatData(node, format);
};
