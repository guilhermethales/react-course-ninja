'use strict';

const reduce = (arr, func, initialValue) => {
  let acc = initialValue;
  let arrCopy = arr;

  if(initialValue === undefined) {
    arrCopy = arr.slice(1);
    acc = arr[0];
  }

  for (let i = 0; i < arrCopy.length; i++) {
    acc = func(acc, arrCopy[i], i, arrCopy)
  }

  return acc;
}

export default reduce;