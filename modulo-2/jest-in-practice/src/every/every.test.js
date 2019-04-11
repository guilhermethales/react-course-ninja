'use strict';

import { expect } from 'chai';
import every from './every';

it('every should be a function', () => {
    expect(every).to.be.a('function');
});

it('every([], (item) => item) should return true', () => {
	expect(every([], (item) => item)).to.be.true;
})

it('every([5, 10, 15, 20], (item) => item > 10) should return false', () => {
	expect(every([5, 10, 15, 20], (item) => item > 10)).to.be.false;
})

it('every([15, 20], (item) => item > 10) should return true', () => {
	expect(every([15, 20], (item) => item > 10)).to.be.true;
})

it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
	expect(every([1, 2, 3], (item, index) => index === item - 1)).to.be.true;
})

it('every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
	expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.true;
})
