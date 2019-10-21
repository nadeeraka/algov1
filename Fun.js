// my array  push method

const myArry = [1, 2, 3, 4, 5];

const arrPush = (arr, arg) => {
  arr[arr.length] = arg;
  return arr;
};

//console.log(arrPush(myArry, 6));

//map
// take arguments
// return new array

const myMap = (arr, fun) => {
  let nArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = fun(arr[i]);
    nArr.push(val);
  }
  return nArr;
};

//console.log(myMap(myArry, a => '<li>'));

// check pelindrom

const isPalindrom = arr => {
  const element = [];
  let temp = arr.split("");
  for (let i = temp.length - 1; i >= 0; i--) {
    element.push(temp[i]);
  }

  return element.join("") === arr ? "palindrom" : "not a palindrom";
};

//console.log(isPalindrom("ollo"));

//sort

const maxee = arr => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i + 1]);
    }
  }
  return temp;
};

//console.log(maxee(myArry));

// reducer

const myReducer = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// reverse number
//51 -> 15

const reverse = arr => {
  let element = [];
  let isNeg = false;
  let temp = arr + "".split("");
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === "-") {
      isNeg = true;
    } else {
      element.push(temp[i]);
    }
  }
  if (isNeg) {
    let num = element.join("");
    let y = parseInt(num);
    return -Math.abs(y);
  }

  return element.join("");
};

//console.log(reverse(500781));

//optimize code using math.sign()

const optReveres = arg => {
  let num = arg
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(arg) === 1 ? parseInt(num) : parseInt(num) * -1;
};

//console.log(optReveres(178))
//Compare the Triplets

//https://www.hackerrank.com/challenges/compare-the-triplets/problem

let h = [5, 6, 7];
let o = [3, 6, 10];

const def = (a, b) => {
  let arr = [];
  let c = 0;
  let d = 0;
  let aLength = a.length;
  let fullArray = a.concat(b);

  for (let i = 0; i < a.length; i++) {
    if (fullArray[i] > fullArray[aLength + i]) {
      c += 1;
      console.log(fullArray[i], fullArray[aLength + i]);
    } else if (fullArray[i] == fullArray[aLength + i]) {
      console.log("second", fullArray[i], fullArray[aLength + i]);
    } else {
      d += 1;
      console.log("therd", fullArray[i], fullArray[aLength + i]);
    }
  }
  arr.push(c, d);
  return arr;
};
//console.log(def(h, o));

//very big sum
// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015

let big = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const veryBigSum = ar => {
  return ar.reduce((acc, val) => (acc += val), 0);
};
//console.log(veryBigSum(big))
//Diagonal Difference

const diagonalDifference = ( arr, arr1, arr2) => {
  let bigArray = [];
  let left = [];
  let right = [];
  let x = 0;
  if ((arr, arr1, arr2)) {
    arr.length == 3 ? bigArray.push(arr) : null;
    arr1.length == 3 ? bigArray.push(arr1) : null;
    arr2.length == 3 ? bigArray.push(arr2) : null;
  }
  else{
    return false;
  }

  for (let i = 0; i < bigArray.length; i++) {
    left.push(bigArray[i][i]);
  }
  for (let i = bigArray.length - 1; i >= 0; i--) {
    right.push(bigArray[i][x]);
    x++;
  }
  let r;
  let l;
  l = right.reduce((acc, val) => (acc += val), 0);
  r = left.reduce((acc, val) => (acc += val), 0);
  return l - r;
};

//console.log(diagonalDifference( [11, 2, 4], [4, 5, 6], [10, 8, -12]));



