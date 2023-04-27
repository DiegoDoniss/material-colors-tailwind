import { red } from '../src';

describe('Check a red color', () => {
  it('get a color', () => {
    expect(red['500']).toBe('#f44336');
  });
});
