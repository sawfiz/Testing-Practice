import { reverse } from '../src/reverse';

it('Reverse a text string', () => {
  expect(reverse('abc')).toBe('cba');
});
it('Reverse a number string', () => {
  expect(reverse('123')).toBe('321');
});
it('Reverse an empty string', () => {
  expect(reverse('')).toBe('');
});
it('Reverse a string of length 1', () => {
  expect(reverse('a')).toBe('a');
});
it('Throw an error for a non-string', () => {
  expect(() =>reverse(1)).toThrow("Not a string");
});

