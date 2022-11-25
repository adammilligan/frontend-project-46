import _ from 'lodash/fp';

const stringify = (val) => {
  if (_.isString(val)) {
    return `'${val}'`;
  }
  if (_.isObject(val)) {
    return '[complex value]';
  }

  return val;
};

const getPropertyName = (acc, key) => {
  if (acc === '') return key;

  return `${acc}.${key}`;
};

const getPlain = (node, acc) => {
  const getResult = (data) => {
    const result = data.map((el) => {
      const newAcc = getPropertyName(acc, el.key);
      switch (el.type) {
        case 'unchanged':
          return '';
        case 'nested':
          return `${getPlain(el.children, newAcc)}`;
        case 'added':
          return `Property '${newAcc}' was added with value: ${stringify(el.value)}`;
        case 'deleted':
          return `Property '${newAcc}' was removed`;
        case 'changed':
          return `Property '${newAcc}' was updated. From ${stringify(el.valueBefore)} to ${stringify(el.valueAfter)}`;
        default:
          throw new Error(`Unknown type ${el.type}`);
      }
    });

    return result;
  };

  const tree = getResult(node);

  // eslint-disable-next-line fp/no-mutating-methods
  return `${_.compact(tree).sort().join('\n')}`;
};

export default (node) => getPlain(node, '');
