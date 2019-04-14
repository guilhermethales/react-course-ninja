import { expect } from 'chai';
import reduce from './reduceRight-recursive';

it('reduce(["me", "lher", "Gui"], (acc, item) => acc + item) should return Guilherme', () => {
  const before = reduce(['me',  'lher', 'Gui'], (acc, item) => acc + item, '');
  const after = 'Guilherme';
  expect(before).to.be.equal(after);
});