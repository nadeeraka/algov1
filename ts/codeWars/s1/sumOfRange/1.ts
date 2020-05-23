// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// get_sum(1, 0) == 1   // 1 + 0 = 1
// get_sum(1, 2) == 3   // 1 + 2 = 3
// get_sum(0, 1) == 1   // 0 + 1 = 1
// get_sum(1, 1) == 1   // 1 Since both are same
// get_sum(-1, 0) == -1 // -1 + 0 = -1
// get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function sumOfRange(a: number, b: number) {
    let count: number = 0;
    if (a == b) {
      return a;
    }
    const looping = (a, b) => {
      for (let i = a; i <= b; i++) {
        count += i;
      }
      return count;
    };
    if (a > b) {
      return looping(b, a);
    }
    return looping(a, b);
  }
  console.log(sumOfRange(-1, 0));
  