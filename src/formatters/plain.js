import _ from 'lodash';

const stringify = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return value;
};

const getPropertyName = (acc, key) => {
  if (acc === '') return key;

  return `${acc}.${key}`;
};

const getPlain = (tree, acc) => {
  const getResult = (data) => {
    const result = data.map((element) => {
      const newAcc = getPropertyName(acc, element.key);
      switch (element.type) {
        case 'unchanged':
          return '';
        case 'nested':
          return `${getPlain(element.children, newAcc)}`;
        case 'added':
          return `Property '${newAcc}' was added with value: ${stringify(element.value)}`;
        case 'deleted':
          return `Property '${newAcc}' was removed`;
        case 'changed':
          return `Property '${newAcc}' was updated. From ${stringify(element.valueBefore)} to ${stringify(element.valueAfter)}`;
        default:
          throw new Error(`Unknown type ${element.type}`);
      }
    });

    return result;
  };

  const plain = getResult(tree);

  return `${_.compact(plain).join('\n')}`;
};

export default (tree) => getPlain(tree, '');
