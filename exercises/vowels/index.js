// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

//regex solution

function vowels(str) {
  //g allows us to find all possible matches, so it doesn't stop at one match. the i stands for case insensitive, so it can detect both upper and lower cases
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
