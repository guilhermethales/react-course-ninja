import { expect } from 'chai';
import some from './some-recursive';

it('some should return a function', () => {
  expect(some).to.be.a('function');
});

it('some([], item => item) should return false', () => {
  expect(some([], item => item)).to.be.false;
});

it('some([1, 2, 3], item => item < 2) should return true', () => {
  expect(some([1, 2, 3], item => item < 2)).to.be.true;
});

it('some([10, 20, 30, 40, 1], item => item < 2) should return true', () => {
  expect(some([10, 20, 30, 40, 1], item => item < 2)).to.be.true;
});

it('some([5, 2, 3], item => item < 2) should return false', () => {
  expect(some([5, 2, 3], item => item < 2)).to.be.false;
});

it('some([0, 1, 2, 3], item => item < 2) should return false', () => {
  expect(some([10, 20, 2], (item, index) => item === index)).to.be.true;
});

it('some([0, 1, 2, 3], item => item < 2) should return false', () => {
  expect(some([10, 20, 2], (item, index, array) => item === array[2])).to.be.true;
});