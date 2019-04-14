import { expect } from 'chai';
import reduce from './reduce';

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function');
});

it('reduce([1, 2, 3], (acc, item) => acc + item) should return 6', () => {
  const before = reduce([1, 2, 3], (acc, item) => acc + item, 0);
  const after = 6;
  expect(before).to.be.equal(after);
});

it('reduce([2, 3, 4], (acc, item) => acc + item) should return 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item, 0);
  const after = 9;
  expect(before).to.be.equal(after);
});

it('reduce([2, 3, 4], (acc, item) => acc + item) should return 12', () => {
  const before = reduce([3, 4, 5], (acc, item) => acc + item);
  const after = 12;
  expect(before).to.be.equal(after);
});

it('reduce([1, 2], (acc, item) => { acc["number-" + item]; return acc; }) should return { "number1": 1, "number2": 2 }', () => {
  const before = reduce([1, 2], (acc, item) => { 
    acc['number-' + item] = item; 
    return acc; 
  }, {});
  const after = { 'number-1': 1, 'number-2': 2 };
  expect(before).to.be.deep.equal(after);
});

it('reduce([0, 1], (acc, item, index) => acc + index) should return 12', () => {
  const before = reduce([0, 1], (acc, item, index) => acc + index, 0);
  const after = 1;
  expect(before).to.be.equal(after);
});

it('reduce([1,2], (acc, item, index, array) => acc + array[index]) should return 3', () => {
  const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0);
  const after = 3;
  expect(before).to.be.equal(after);
});