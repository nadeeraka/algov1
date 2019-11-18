
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
function createPhoneNumber(array) {
    let newArray = [];
    let str = "";
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        str = `${`(` + array[i].toString()}`;
        newArray.push(str);
      } else if (i > 0 && i < 3) {
        str = `${array[i].toString()}`;
        newArray.push(str);
      } else if (i === 3) {
        str = `${`) `}`;
        newArray.push(str, array[i].toString());
      } else if (i > 3 && i < 5) {
        str = `${array[i].toString()}`;
        newArray.push(str);
      } else if (i === 5) {
        str = `${`-`}`;
        newArray.push(array[i].toString(), str);
      } else if (i > 5 && i < 9) {
        str = `${array[i].toString()}`;
        newArray.push(str);
      }
    }
    return newArray.join("");
  }
  