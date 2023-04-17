export const reverse = (string) => {
  if (typeof string !== 'string') throw new Error("Not a string");
  
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
};
