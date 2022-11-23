import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parse from '../src/parse.js';
import formatters from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (fullPath) => fs.readFileSync(fullPath, 'utf-8');

const formats = ['json', 'yml'];

describe('gendiff', () => {
  const getResult = (format) => readFile(getFixturePath(format));

  test.each(formats)('gendiff %s format', (format) => {
    const pathToFile1 = getFixturePath(`before.${format}`);
    const pathToFile2 = getFixturePath(`after.${format}`);
    expect(genDiff(pathToFile1, pathToFile2)).toEqual(getResult('stylish'));
    expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(getResult('plain'));
    expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(getResult('json'));
  });
});

test('throw new Error', () => {
  const parseFunctionWrapper = () => parse('test', 'test');
  const formattersFunctionWrapper = () => formatters('test', 'test');
  expect(parseFunctionWrapper).toThrow(Error);
  expect(parseFunctionWrapper).toThrow('unknown file extension test');
  expect(formattersFunctionWrapper).toThrow(Error);
  expect(formattersFunctionWrapper).toThrow('output format test not found');
});
