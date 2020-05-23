const arr: number[] = [1, 2, 3, 2, 1, 2];
const arr2: number[] = [1, 3, 1, 2, 4, 5];


const value = 5;

const findFirstDuplicate = (arr: number[], n?: number): number => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
   
    if (obj[element]) {
      return element;
    }
    obj[element] = element
 
  }
  

  return -1;
};

console.log(findFirstDuplicate(arr,value))
