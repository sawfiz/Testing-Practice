export const calculator = () => {

  const add  = (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Error! Missing operand(s). Usage: add(a,b)')
    return a + b;
  }
  const substract  = (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Error! Missing operand(s). Usage: add(a,b)')
    return a - b;
  }
  const multiply  = (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Error! Missing operand(s). Usage: add(a,b)')
    return a * b;
  }
  const divide  = (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Error! Missing operand(s). Usage: add(a,b)')
    if (b === 0) throw new Error('Division by zero is not allowed!')
    return a / b;
  }

  return {
    add,
    substract,
    multiply,
    divide
  }
}