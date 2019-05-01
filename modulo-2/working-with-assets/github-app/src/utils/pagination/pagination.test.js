import { expect } from 'chai';
import pagination from './index';

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function');
})

test('pagination({ total: 1, activePage: 1 }) should be a function', () => {
  const params = { total: 1, activePage: 1 }
  expect(pagination(params)).to.be.deep.equal([1]);
})

test('pagination({ total: 2, activePage: 1 }) should be a function', () => {
  const params = { total: 2, activePage: 1 }
  expect(pagination(params)).to.be.deep.equal([1, 2]);
})

test('pagination({ total: 4, activePage: 1 }) should be a function', () => {
  const params = { total: 4, activePage: 1 }
  expect(pagination(params)).to.be.deep.equal([1, 2, 3, 4]);
})