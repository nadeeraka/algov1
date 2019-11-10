// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function hashGen(params) {
  let strings = params.charAt(0).toUpperCase() + params.slice(1);
  let getRidSpace = strings.split(" ").join();
  if (params.length >= 140 || strings.length <= 0) {
    return false;
  }
  return "#" + getRidSpace;
}
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}
// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function century(year) {
  let cen = year / 100;
  if (year % 100 == 0) {
    return cen;
  }
  return Math.floor(cen) + 1;
}
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(params) {
  let newArr = [];
  let isLeft = true;
  const round = (s, i) => {
    for (let x = i; x >= 0; x--) {
      if (x === i) {
        let c = s.toUpperCase();
        newArr.push(c);
      } else {
        let c = s.toLowerCase();
        newArr.push(c);
      }
      if (x === 0 && isLeft) {
        let v = "-";
        newArr.push(v);
      }
    }
  };
  let arr = params.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      isLeft = false;
    }
    round(arr[i], i, isLeft);
  }
  return newArr.join("");
}
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  // enter your majic here
  str.split("").map(res => {
    switch (res) {
      case "a":
        vowelsCount++;
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
        break;
      case "u":
        vowelsCount++;
        break;

      default:
        break;
    }
  });
  return vowelsCount;
}
// Make a program that takes input and returns "Fizz" if it is a multiple of 7, "Fang" if it is a mulitple of 49 AND 3, "Foo" if it is a multiple of 15, and "Far" if it is not divisible by any of those.
// Note: Your program should only give one output. Note: When you are making your code you should check the divisibility such that it checks 49 and 3 first then 7 then 15. Check the example test codes for examples of the outputs and inputs.
// ! not done