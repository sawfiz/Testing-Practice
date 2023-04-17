export const capitalize = (string) => {
  // Use slice() instead of string[0] to avoid issue with an empty string
  const output = string.slice(0, 1).toUpperCase() + string.slice(1);
  return output;
};
