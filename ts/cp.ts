// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (arr: number[]): string => {
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i == 0) {
        nArr.push("(");
        nArr.push(arr[i]);
      } else if (i == 3) {
        nArr.push(")");
        nArr.push(" ");
        nArr.push(arr[i]);
      } else if (i == 6) {
        nArr.push("-");
        nArr.push(arr[i]);
      } else {
        nArr.push(arr[i]);
      }
    }
  
    return nArr.join("");
  };

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))