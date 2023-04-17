import { capitalize } from '../src/capitalize';

it('Capitalize a text string', () => {
  expect(capitalize('abcd')).toBe('Abcd');
});
it('Capitalize a text string that starts with a number', () => {
  expect(capitalize('1bcd')).toBe('1bcd');
});
it('Capitalize a text string that starts with a space', () => {
  expect(capitalize(' bcd')).toBe(' bcd');
});
it('Capitalize a text string that starts with a symbol', () => {
  expect(capitalize('!bcd')).toBe('!bcd');
});
it('Capitalize an empty text string', () => {
  expect(capitalize('')).toBe('');
});
