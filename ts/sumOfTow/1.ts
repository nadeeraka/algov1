const a: number[] = [1, 2, 3];
const b: number[] = [10, 20, 30, 40];
const num: number = 42;
// ||
const sumOfTow = (arr: number[], arr2: number[], n: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element + arr2[i] === n) {
      return true;
    } else if (arr[arr.length - i] + arr2[arr2.length - i] === n) {
      return true;
    } else if (element + arr2[arr2.length - i] === n) {
      return true;
    } else if (arr2[i] + arr[arr.length - i]) {
      return true;
    }

    // console.log(  arr2[arr2.length-i])
  }
};

console.log(sumOfTow(a, b, num));
