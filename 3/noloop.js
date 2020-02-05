// * No Loops Allowed *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

const arr = [1, 2, 3, 4];

const noloop = (a, x) => {
  let num = 0;
  const poop = () => {
    if (a[num] === x) {
      return true;
    }

    if (num < arr.length) {
      num++;
      return poop() ? true : "";
    } else {
      return false;
    }
  };
  if (poop()) {
    return true;
  }
  if (poop() === false) {
    return false;
  }
};

console.log(noloop(arr));

// short answer
function check(a, b) {
  return a.includes(b);
}
//
check=(a,x)=>a.some(v=>v==x)
//
