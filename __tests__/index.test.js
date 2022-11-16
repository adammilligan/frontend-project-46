import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const expected = readFile('resulttest.txt');

test('first test', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});

// console.log(genDiff(filepath1, filepath2));
// console.log(expected);
