import { readFileSync } from 'fs';
import path from 'node:path';
import makeNode from "./makeNode.js";

const getData = (pathFile) => readFileSync(pathFile, 'utf-8');
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);

export default (file1, file2) => {
    const file1Object = JSON.parse(readFileSync(file1, 'utf-8'))
    const file2Object = JSON.parse(readFileSync(file2, 'utf-8'))
    console.log(makeNode(file1Object, file2Object))
}
