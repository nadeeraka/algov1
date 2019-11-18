// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters
// besides the ten numerals "0" to "9".

function sumStrings(a, b) {
    let long;
    let short;
    let sum = 0;
    let leftOver = false;
    let x = parseInt(a);
    let y = parseInt(b);
    if (x < 10000000 && y < 10000000) {
      return (Number(x) + Number(y)).toString();
    }
    let arr1 = a.split("");
    let arr2 = b.split("");
    if (arr2.length < arr1.length) {
      long = arr1;
      short = arr2;
    } else {
      long = arr2;
      short = arr1;
    }
    let shortSuppoter = long.length - short.length;
    shortSuppoter;
  
    for (let i = long.length - 1; i > 0; i--) {
      let num = 0;
      sum = parseInt(short[i - shortSuppoter]) + parseInt(long[i]);
      if(leftOver)
      {
          leftOver= false;
     sum = sum+1     
      }
      
      if (sum >= 10) {
        leftOver = true;
        num = sum % 10;
        sum = num
      }
      
  
      console.log(sum);
    }
    return leftOver;
  }
  
  console.log(sumStrings("7125693", "2345676567876756655667777777"));
  
  var a = 7125693 + 876756655667777777;
 
  