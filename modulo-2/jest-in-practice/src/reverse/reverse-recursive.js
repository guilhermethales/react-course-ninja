'use strict';

const reverse = (arr) => {
  return arr.length === 0 ? [] : (function() {
    const item = arr[arr.length - 1];
    const tail = arr.slice(0, -1)
  
    return [item].concat(reverse(tail))
  })();
}

export default reverse;