const filter = (arr, func) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i], i, arr))
      newArr.push(arr[i]);
  }
  return newArr;
};

export default filter;