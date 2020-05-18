const a: number[] = [1, 2, 3];
const b: number[] = [10, 20, 30, 40];
const num: number = 42;

//beter solution

const sumOfTowArray = (arr: number[], arr2: number[], n: number): boolean => {
  const arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const value = n - element;
    arr3.push(value);
  }
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (arr3.includes(element)) {
      return true;
    }
  }

  return false;
};

console.log(sumOfTowArray(a, b, num));
