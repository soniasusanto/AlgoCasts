// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   if (stringA.length !== stringB.length) {
//     return false;
//   } else {
//     objA = stringA.split('').reduce((obj, letter) => {
//       if (!obj[letter]) {
//         obj[letter] = 1;
//       } else {
//         obj[letter] += 1;
//       }
//       return obj;
//     }, {});
//     objB = stringB.split('').reduce((obj, letter) => {
//       if (!obj[letter]) {
//         obj[letter] = 1;
//       } else {
//         obj[letter] += 1;
//       }
//       return obj;
//     }, {});
//     for (let letter in objA) {
//       if (objA[letter] !== objB[letter]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

function anagrams(stringA, stringB) {
  stringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  stringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  if (stringA === stringB) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagrams;
