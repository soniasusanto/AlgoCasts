// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//tips and tricks
//Math.sign() returns the sign of a number, indicating whether the number is positive, negative or zero. If positive, returns 1, if negative, returns -1.

function reverseInt(n) {
  let isNegative = false;
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    isNegative = true;
  }
  n = Math.abs(n).toString();
  let reversed = n.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');

  if (isNegative) {
    return -parseInt(reversed);
  } else {
    return parseInt(reversed);
  }

  //return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
