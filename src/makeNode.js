import _ from 'lodash';

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const makeNode = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const result = _.sortBy(_.union(keys1, keys2)).map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return [key, { difference: 'added', value: data2[key] }]; // ключ отсутствовал в первом объекте, но был добавлен во второй
    }
    if (!Object.hasOwn(data2, key)) {
      return [key, { difference: 'deleted', value: data1[key] }]; // ключ был в первом объекте, но отсутствует во втором
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return [key, { difference: 'nested', value: makeNode(data1[key], data2[key]) }]; // оба значения объекты
    }
    if (data1[key] !== data2[key]) {
      return [key, { difference: 'changed', value1: data1[key], value2: data2[key] }]; // ключ присутствовал и в первом и во втором объектах, но значения отличаются
    }
    return [key, { difference: 'unchanged', value: data1[key] }]; // ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
  });
  return _.fromPairs(result);
};
// console.log(makeNode(file1, file2));

export default makeNode;
