import { readFileSync } from 'fs';
import path from 'node:path';
import makeNode from './makeNode.js';

const readFile = (file) => {
  const fullPath = path.resolve(process.cwd(), file);
  const data = readFileSync(fullPath, 'utf-8');
  return JSON.parse(data);
};

export default (file1, file2) => {
  const file1Object = readFile(file1);
  const file2Object = readFile(file2);
  return makeNode(file1Object, file2Object);
};
