import { readFileSync } from 'fs';
import path from 'node:path';
import makeNode from './makeNode.js';
import parse from './parse.js';

const getData = (pathFile) => readFileSync(pathFile, 'utf-8');
export const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);

export default (file1, file2) => {
  const file1Object = parse(getData(file1), getTypeFile(file1));
  const file2Object = parse(getData(file2), getTypeFile(file2));
  return makeNode(file1Object, file2Object);
};
