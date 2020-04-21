// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]] = 1;
    } else {
      charMap[str[i]] += 1;
    }
  }
  let max = str[0];
  for (let char in charMap) {
    if (charMap[max] < charMap[char]) {
      max = char;
    } else {
      continue;
    }
  }
  return max;
}

module.exports = maxChar;
