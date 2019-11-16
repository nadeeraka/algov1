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
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
// Happy coding!

function countSmileys(arr) {

    let  count = 0
        for (let i = 0; i < arr.length; i++) {
           //temp = arr[i].slice(0,1)
            if(arr[i].slice(0,1)===':' ||arr[i].slice(0,1)===';' )
            {
                if(arr[i].slice(1,2)==='D'||arr[i].slice(1,2)===')'  )
                {
                    console.log(arr[i])
                        count += 1
                }else if((arr[i].slice(1,2)==='~' ||arr[i].slice(1,2)==='-') && (arr[i].slice(2,3)===')'|| arr[i].slice(2,3)==='D'))
                {
                    console.log(arr[i])
                    count += 1
                }
                
            }
    
    
        }
        return count
        
    }
    