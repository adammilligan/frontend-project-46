import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

// const formats = ['json', 'ini', 'yml'];
//
// describe('gendiff', () => {
//   const getResult = (format) => readFile(getFixturePath(format));
//
//   test.each(formats)('gendiff %s format', (format) => {
//     const pathToFile1 = getFixturePath(`before.${format}`);
//     const pathToFile2 = getFixturePath(`after.${format}`);
//     expect(genDiff(pathToFile1, pathToFile2)).toEqual(getResult('stylish'));
//     expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(getResult('plain'));
//     expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(getResult('json'));
//   });
// });

const filepath1 = getFixturePath('before_flat.json');
const filepath2 = getFixturePath('after_flat.json');
const expected = readFile('resultTest.txt');

test('first test', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
//
// // console.log(expected);
// // console.log(genDiff(filepath1, filepath2));
