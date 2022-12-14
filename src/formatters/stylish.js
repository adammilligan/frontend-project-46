import _ from 'lodash';

const indent = 4;
const initial = 2;

const generateObjectString = (currentDepth, currentValue, conditionalIndent, el) => `\n${' '.repeat(currentDepth + initial)}  ${el}: ${currentValue}${conditionalIndent}`;

const stringify = (val, level) => {
  if (!_.isObject(val) || _.isNull(val)) {
    return val;
  }

  const keys = Object.keys(val);

  const result = keys.map((el, index) => {
    const currentValue = `${stringify(val[el], level + 1)}`;
    const currentDepth = (level + 1) * indent;

    const conditionalIndent = index + 1 === keys.length ? `\n${' '.repeat(currentDepth)}` : '';

    return generateObjectString(currentDepth, currentValue, conditionalIndent, el);
  });

  return `{${result.join('')}}`;
};

const getStylish = (node, depth) => {
  const getResult = (data, level) => {
    const result = data.map((el) => {
      const currentIndent = ' '.repeat((level) * indent + initial);

      switch (el.type) {
        case 'unchanged':
          return `${currentIndent}  ${el.key}: ${stringify(el.value, level)}`;
        case 'nested':
          return `${currentIndent}  ${el.key}: ${getStylish(el.children, level + 1)}`;
        case 'added':
          return `${currentIndent}+ ${el.key}: ${stringify(el.value, level)}`;
        case 'deleted':
          return `${currentIndent}- ${el.key}: ${stringify(el.value, level)}`;
        case 'changed':
          return `${currentIndent}- ${el.key}: ${stringify(el.valueBefore, level)}\n${currentIndent}+ ${el.key}: ${stringify(el.valueAfter, level)}`;
        default:
          throw new Error(`Unknown type ${el.type}`);
      }
    });

    return result;
  };

  const tree = getResult(node, depth);

  return `{\n${tree.join('\n')}\n${' '.repeat(depth * indent)}}`;
};

export default (node) => getStylish(node, 0);
