const arr = [1, 2, 3, 2, 3];

const myMap = (arr: any[], fun?: Function): any[] => {
  const newArr = [];
  if (arr.length === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fun) {
      try {
        newArr.push(fun(element));
      } catch (error) {
        throw "maping error" + error;
      }
    }
  }
  return newArr;
};

//console.log(myMap(arr, (a) => a - 9));
