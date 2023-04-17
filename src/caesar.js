const isLower = (char) => {
  if (char >= 'a' && char <= 'z') return true;
};

const isUpper = (char) => {
  if (char >= 'A' && char <= 'Z') return true;
};

export const caesarCiper = (string, key) => {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (isLower(string[i])) {
      output += String.fromCharCode(
        ((string[i].charCodeAt(0) + key - 97) % 26) + 97
      );
    } else if (isUpper(string[i])) {
      output += String.fromCharCode(
        ((string[i].charCodeAt(0) + key - 65) % 26) + 65
      );
    } else {
      output += String.fromCharCode(string[i].charCodeAt(0) + key);
    }
  }
  return output;
};
