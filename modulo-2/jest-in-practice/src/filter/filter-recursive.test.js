'use strict';

import { expect } from 'chai';
import filter from './filter-recursive';

it('filter should be a function', () => {
	expect(filter).to.be.a('function');
})

it('filter([1, 2], (item) => item) should return [1, 2]', () => {
	expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3]);
})

it('filter([1, 2], (item) => item) should return [1, 2]', () => {
	expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2]);
})

it('filter([3, 4], (item) => item) should return [3, 4]', () => {
	expect(filter([3, 4, 6, 7, 10, 15], (item) => item % 2 === 0)).to.be.deep.equal([4, 6, 10]);
})

it('filter([1, 2], (item, index) => index) should return [0, 1]', () => {
	expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3]);
})

it('filter([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
	expect(filter([1, 2, 3, 2 , 1, 5], (item, index, array) => index === array.indexOf(item) )).to.be.deep.equal([1, 2, 3, 5]);
})