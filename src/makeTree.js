import _ from 'lodash';

const makeTree = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = keys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      const children = makeTree(data1[key], data2[key]);

      return { key, type: 'nested', children };
    }

    if (!_.has(data1, key) && _.has(data2, key)) {
      return { key, type: 'added', value: data2[key] };
    }

    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }

    if (data1[key] !== data2[key]) {
      return {
        key, type: 'changed', valueBefore: data1[key], valueAfter: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
  return result;
};

export default makeTree;
