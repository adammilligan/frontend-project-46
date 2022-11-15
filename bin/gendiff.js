#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index';

const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format(choices: stylish, plain, json)', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => gendiff(file1, file2));
program.parse();
