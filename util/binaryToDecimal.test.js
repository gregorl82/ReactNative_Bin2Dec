import { binaryToDecimal } from './binaryToDecimal';

describe('Converting binary to decimal', () => {
  it('10101 gives the decimal value 21', () => {
    const result = binaryToDecimal('10101');
    expect(result).toEqual(21);
  });

  it('0 gives the decimal value 0', () => {
    const result = binaryToDecimal('0');
    expect(result).toEqual(0);
  });

  it('1 gives the decimal value 1', () => {
    const result = binaryToDecimal('1');
    expect(result).toEqual(1);
  });

  it('11111111 gives the decimal value 255', () => {
    const result = binaryToDecimal('11111111');
    expect(result).toEqual(255);
  });
});
