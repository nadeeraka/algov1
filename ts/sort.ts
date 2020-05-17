// filter elements except 1st array

//https://medium.com/@george.seif94/a-tour-of-the-top-5-sorting-algorithms-with-python-code-43ea9aa02889
let arr1 = ["foo", "bar", "foobar"];
let arr2 = ["bar", "foo"];
let nArr;

const findExceptItems = () => {
  let isEqul = false;
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];

    for (let x = 0; x < arr2.length; x++) {
      const element2 = arr2[x];
      if (element2 === element) {
        isEqul = true;
      }
    }
    if (!isEqul) {
      nArr.push(element);
    }
  }
  return nArr
};
//! big 0(n^2)

// sort uniq items
// const arr:number[] =[1,3,6,8,5,4,0]

// const unique =(arr:number[])=>
// {
//     let newArr = []
//     let val = {c:arr[0],index:0}
// for (let i = 0; i < arr.length; i++) {
//     val.c = arr[0]
//     for (let x = 0; x < arr.length; x++) {
//         const element = arr[x];
//         if (i === 0 && element < val.c) {
//             val.c = element
//             val.index = x
            
//         }
//         else if (element < val.c && newArr[newArr.length-1]< element) {
//             val.c = element
//         }
      
//     }
//     newArr.push(val.c)
//     arr.splice(val.index)
//     console.log(arr.length)
    
// }
// return newArr

// }

// console.log(unique(arr))
// //sort using buble sort
