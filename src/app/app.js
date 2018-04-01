import * as R from 'ramda';

const arr1 = ['a', 2, 'b'];
const arr2 = ['y', 'z'];

const arr3 = R.union(arr1, arr2);

console.log(arr3);
