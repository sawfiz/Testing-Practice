import { calculator } from '../src/calculator';

it('Add 2 numbers', () => {
  const calc = calculator();
  expect(calc.add(1, 2)).toBe(3);
});
it('Add another 2 numbers', () => {
  const calc = calculator();
  expect(calc.add(3, 4)).toBe(7);
});
it('Missing 1 operand', () => {
  const calc = calculator();
  expect(() => calc.add(3)).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});
it('Missing 2 operands', () => {
  const calc = calculator();
  expect(() => calc.add()).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});

it('Substract 2 number', () => {
  const calc = calculator();
  expect(calc.substract(1, 2)).toBe(-1);
});
it('Substract a nother 2 number', () => {
  const calc = calculator();
  expect(calc.substract(4, 3)).toBe(1);
});
it('Missing 1 operand', () => {
  const calc = calculator();
  expect(() => calc.add(3)).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});
it('Missing 2 operands', () => {
  const calc = calculator();
  expect(() => calc.add()).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});

it('Multiply 2 number', () => {
  const calc = calculator();
  expect(calc.multiply(1, 2)).toBe(2);
});
it('Multiply another 2 number', () => {
  const calc = calculator();
  expect(calc.multiply(3, 4)).toBe(12);
});
it('Missing 1 operand', () => {
  const calc = calculator();
  expect(() => calc.substract(3)).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});
it('Missing 2 operands', () => {
  const calc = calculator();
  expect(() => calc.substract()).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});

it('Divide 2 number', () => {
  const calc = calculator();
  expect(calc.divide(1, 2)).toBe(0.5);
});
it('Divide another 2 number', () => {
  const calc = calculator();
  expect(calc.divide(3, 4)).toBe(0.75);
});
it('Missing 1 operand', () => {
  const calc = calculator();
  expect(() => calc.divide(3)).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});
it('Missing 2 operands', () => {
  const calc = calculator();
  expect(() => calc.divide()).toThrow(
    'Error! Missing operand(s). Usage: add(a,b)'
  );
});
it('Divide by zero', () => {
  const calc = calculator();
  expect(() => calc.divide(3, 0)).toThrow('Division by zero is not allowed!');
});
