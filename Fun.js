// push

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
// 3 args
// return new arr

const myReducer = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

//console.log(myReducer(myArry))

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

//maxChar
// abbbbc => b
let v = ["s", "d", "b", "s"];
const maxChar = char => {
  let temp = { val: "" };
  let count = 0;
  for (let i = 0; i < char.length; i++) {
    temp.val = char[i];
  }
  return temp.val;
};
// if(char[i] === char[i+1])
// count++;
//  temp.val = char[i];
//  temp.count = count;

// }elseif(char[i-1] === char[i])
// {
// count++;
//  temp.val = char[i];
//  temp.count = count;

// }

//console.log(maxChar(v))

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
console.log(def(h, o));
