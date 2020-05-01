//Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.
//https://www.codewars.com/kata/56b1eb19247c01493a000065

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

const sumOfUniqValues = (arr: number[]) => {
  const nArr: number[] = [];
  if (arr.length === 0) {
      return null
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (nArr.indexOf(element) === -1) {
      nArr.push(element);
    }
  }

  return nArr.reduce((a, b) => a + b);
};
