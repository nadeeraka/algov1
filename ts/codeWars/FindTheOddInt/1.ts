//Find the odd int

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// perfect answer 
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }
  const arr:number[] = [1,2,3,1,2,3,3,2] //2
const arr2:number[] = [1,1,1,1,1,1,10,1,1,1,1] //10
const arr3 = [ 1,3,4,1,1]

 function findTheOddInt(A:number[]) {
     let  char = {}
    for (const i of A) {
        if (!char[i]) {
            char[i] =1
        }else{
            char[i]++
          
    }
       
 }
 for (const key in char) {
     if (char[key]%2 ==1 ) {
         return parseInt(key)
     }
 }
}
 console.log(findTheOddInt(arr2))