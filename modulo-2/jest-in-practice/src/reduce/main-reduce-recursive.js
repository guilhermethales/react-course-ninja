'use strict';

const isInitialValueUndefined = (initialValue) => initialValue === undefined;

const mainReduceRecursive = (arr, func, initialValue) => {
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;
  const index = isInitialValueUndefined(initialValue) ? 1 : 0;
  return (function reduceInternal (arrInternal, counter, accInternal) {
    const [head, ...tail] = arrInternal;
    const nextAcc = () => func(accInternal, head, counter, arr);
    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(tail, counter + 1, nextAcc())
  })(arrCopy, index, acc)
}

export default mainReduceRecursive;