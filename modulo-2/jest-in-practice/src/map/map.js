'use strict';

const map = (array = [], func = (item) => item) => {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(func(array[i], i, array));
	}

	return newArr;
}

export default map;