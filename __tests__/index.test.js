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

const beforeFlatJson = getFixturePath('before_flat.json');
const afterFlatJson = getFixturePath('after_flat.json');
const beforeFlatYaml = getFixturePath('before_flat.yml');
const afterFlatYaml = getFixturePath('after_flat.yml');
const expected = readFile('resultTest.txt');

test('first test', () => {
  expect(genDiff(beforeFlatJson, afterFlatJson)).toEqual(expected);
  expect(genDiff(beforeFlatYaml, afterFlatYaml)).toEqual(expected);
});

//
// // console.log(expected);
// // console.log(genDiff(beforeFlatJson, afterFlatJson));
