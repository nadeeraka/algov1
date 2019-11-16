// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(params) {
  return params.filter(e => typeof e == "number");
}
//  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrl(url) {
  let array = url.split("");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "#") {
      i = array.length;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray.join("");
}
//https://www.codewars.com/kata/54ba84be607a92aa900000f1
//  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(params) {
  let myOb = {};
  let i = 0;
  let array = params
    .toUpperCase()
    .split("")
    .map(w => (myOb[w] = w));
  for (const key in myOb) {
    if (myOb.hasOwnProperty(key)) {
      i++;
    }
  }
  return array.length === i;
}

// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Here's how it works:
// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(p) {
  let res = 0;
  let sn = false;

  const reduceNum = p => {
    let str = "" + p;
    str;
    const reducer = (acc, current) => parseInt(acc) + parseInt(current);
    str;
    res;
    res = str.split("").reduce(reducer, 0);

    return res;
  };
  res = reduceNum(p);

  while (res > 10) {
    res = reduceNum(res);
  }
  return res;
}
