'use strict';

const map = (array = [], func = (item) => item) => {
	if(!Array.isArray(array)) {
		throw new TypeError('The first parameter must be an array');
	}
	if(typeof func !== 'function') {
		throw new TypeError('The second parameter must be a function');
	}
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(func(array[i], i, array));
	}

	return newArr;
}

export default map;