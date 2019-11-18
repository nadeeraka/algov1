// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let arr = str.split("");
    let newArray = [];
    let string = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1]) {
        string = `${arr[i] + arr[i + 1]}`;
        newArray.push(string);
  
        i = i + 1;
      } else if (arr.length % 2 == 1) {
        newArray.push(arr[arr.length - 1] + "_");
      }
    }
    return newArray;
  
  }
  
  
  console.log(solution("abcdaaa"));
  