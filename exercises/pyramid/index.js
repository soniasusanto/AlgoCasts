// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  //if row === n, we are on the last row and should return
  if (row === n) {
    return;
  }
  //if the string 'level' has a length equal to 2*n-1 (max possible length,for a given n, its length will be 2n-1), it means it has reached the end of the string and we should console log it. Call the function again to proceed to the next row by incrementing row.
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  //if not, we are still in the midst of building the level. Calculate midpoint.
  let mid = Math.floor((2 * n - 1) / 2);
  let add;
  //since we are building the string as we go along, level.length represents the column we are at. This checks both the left and right boundaries of the string.
  if (mid - row <= level.length && mid + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  //call the function again with the updated string (appending the add variable to level)
  pyramid(n, row, level + add);
}

module.exports = pyramid;
