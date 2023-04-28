import { colors } from '../src';

describe('Check a red color', () => {
  it('get a color', () => {
    expect(colors.red['500']).toBe('#f44336');
  });
});
