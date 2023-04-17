export const analyzeArray = (array) => {
  const length = array.length;
  const average =
    array.reduce((accumulator, currentValue) => accumulator + currentValue) /
    length;
  const min = array.reduce((minimum, currentValue) => {
    return Math.min(minimum, currentValue);
  });
  const max = array.reduce((maximum, currentValue) => {
    return Math.max(maximum, currentValue);
  });

  // const min = Math.min(...array);
  // const max = Math.max(...array);

  const result = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  console.log('🚀 ~ file: analyzeArray.js:28 ~ analyzeArray ~ result:', result);
  return result;
};
