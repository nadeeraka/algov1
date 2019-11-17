// Share this kata:
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
// //

function sortArray(array) {
    let oddArray = []
    let newArray= []
    let evArr = []
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if ( array[i]%2 ===1) {
          oddArray.push(array[i])
      }else if(array[i]){
          newArray.push(i)
          evArr.push(array[i])
          
      }
        
    }
    oddArray.sort()

    for (let i = 0; i < array.length; i++) {
       if(newArray[i]== i)
       {
           arr[i]=evArr
       }else{
           arr.push(oddArray[i])
       }
        
    }
    return arr
}
