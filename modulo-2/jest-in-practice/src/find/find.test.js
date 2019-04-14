'use strict';

import { expect } from 'chai';
import find from './find';

it('find should be a function', () => {
	expect(find).to.be.a('function');
})

it('find([1, 2, 3], (item) => item === 2) should return 2', () => {
	expect(find([1, 2, 3], (item) => item === 2)).to.be.equal(2);
})

it('find([1, 2], (item) => item) should return 1', () => {
	expect(find([0, 1, 2], (item) => item)).to.be.deep.equal(1);
})

it('find([1, 2, 3], (item, index) => index === 2) should return 3', () => {
	expect(find([1, 2, 3], (item, index) => index === 2)).to.be.equal(3);
})

it('find([1, 2, 3, 2 , 1, 5], (item, index, array) => item === arr[6]) should return 5', () => {
	expect(find([1, 2, 3, 2 , 1, 5], (item, index, array) => item === array[5] )).to.be.deep.equal(5);
})

it('find([], (item) => item) should return undefined', () => {
	expect(find([], (item) => item )).to.be.equal(undefined);
})