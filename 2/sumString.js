// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters
// besides the ten numerals "0" to "9".

function sumStrings(a,b) { 
    let newArray = [];
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

for (let i = long.length - 1; i >= 0; i--) {
let num = 0;
if (short[i - shortSuppoter] && long[i]) {
  sum = parseInt(short[i - shortSuppoter]) + parseInt(long[i]);
  if (leftOver) {
    leftOver = false;
    sum = sum + 1;
  }
  if (sum >= 10) {
    leftOver = true;
    num = sum % 10;
    sum = num;
  }
} else {
  if (leftOver) {
    leftOver = false;
    sum = parseInt(long[i]) + 1;
  } else {
    //sum = parseInt(long[i]);
    //use while loop in hear 
  }
}

newArray.push(sum);
}
let val = newArray.reverse().join("");
return val + "";

}

// var a = 7125693 + 876756655667777777;
// // Given the string representations of two integers, return the string representation of the sum of those integers.

// // For example:

// // sumStrings('1','2') // => '3'
// // A string representation of an integer will contain no characters
// // besides the ten numerals "0" to "9".

// function sumStrings(a, b) {
//     let newArray = [];
//     let long;
//     let short;
//     let sum = 0;
//     let leftOver = false;
//     let x = parseInt(a);
//     let y = parseInt(b);
//     //for short number only
//     //   if (x < 10000000 && y < 10000000) {
//     //     return (Number(x) + Number(y)).toString();
//     //   }
  
//     let arr1 = a.split("");
//     let arr2 = b.split("");
//     if (arr2.length < arr1.length) {
//       long = arr1;
//       short = arr2;
//     } else {
//       long = arr2;
//       short = arr1;
//     }
  
//     let shortSuppoter = long.length - short.length;
//     let z =short.length
//   z
  
//     for (let i = long.length - 1; i >= 0; i--) {
//       let num = 0;
//       if (short[i - shortSuppoter] && long[i]) {
//         sum = parseInt(short[i - shortSuppoter]) + parseInt(long[i]);
//         if (leftOver) {
//           leftOver = false;
//           sum = sum + 1;
//         }
//         if (sum >= 10) {
//           leftOver = true;
//           num = sum % 10;
//           sum = num;
          
//         }
//       } else {
//         if (leftOver&&sum >0) {
//             i
//           sum =  parseInt(long[i])+1;
//           if (sum >10) {
//               num = sum % 10;
//               sum = num;
                  
//           }
//         } else if(leftOver&& sum>=10){
//               sum =0
  
//         }else{
//           sum = parseInt(long[i]);
//         }
//       }
  
//       newArray.push(sum);
//     }
//     let val = newArray.reverse().join("");
//     return val + "";
  
//   }
  
//   console.log(sumStrings("7125693", "7777777"));
  
//   var a = 7125693 + 7777777;
//   a;
  