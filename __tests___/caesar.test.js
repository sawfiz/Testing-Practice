import { caesarCiper } from "../src/caesar";

it('Shift lower case string by 1', () => {
  expect(caesarCiper('abcd', 1)).toBe('bcde');
});
it('Shift lower case string by 1', () => {
  expect(caesarCiper('abcd', 2)).toBe('cdef');
});
it('Shift by 1, wrap z to a', () => {
  expect(caesarCiper('xyz', 1)).toBe('yza');
});
it('Shift by 2, wrap z to a', () => {
  expect(caesarCiper('xyz', 2)).toBe('zab');
});

it('Shift upper case string by 1', () => {
  expect(caesarCiper('ABCD', 1)).toBe('BCDE');
});
it('Shift upper case string by 2', () => {
  expect(caesarCiper('ABCD', 2)).toBe('CDEF');
});
it('Shift by 1, wrap Z to A', () => {
  expect(caesarCiper('XYZ', 1)).toBe('YZA');
});
it('Shift by 2, wrap Z to A', () => {
  expect(caesarCiper('XYZ', 2)).toBe('ZAB');
});
it('Shift by 2, mix upper, lower, punctuation', () => {
  expect(caesarCiper('Hello!', 2)).toBe('Jgnnq#');
});