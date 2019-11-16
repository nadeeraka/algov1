// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)
function findTheMissingLeter(array) {
  let toUpperCase = false;
  if (array[0] === array[0].toUpperCase()) {
    toUpperCase = true;
  }

  let str = "abcdefghijklmnopqrstuvwxyz";
  let alphabet = `${
    toUpperCase ? str.toLocaleUpperCase().split(" ") : str.split(" ")
  }`;

  let statingPoint = alphabet.indexOf(array[0]);
  let length = array.length + statingPoint;

  for (let i = statingPoint; i < length; i++) {
    if (alphabet[i] != array[i - statingPoint]) {
      return alphabet[i];
    }
  }
}
