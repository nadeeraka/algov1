const arr:number[] = [1,2,3,2,3,7,5]
const ans:number = 12
// ! solved
const findLagestValInSubArray= (arr:number[], n:number)=>
{
    let count:number = 0
    let itaration:number = 0

  for (let i = 0; i <arr.length; i++) {
      const element = arr[i];
      count += element
      count
      if (count ==n) {
          //array slice is not woking properly
        return [itaration,i]
      }
      if (count>n ) {
          itaration = i-1
        
          i = itaration
          count = 0
         // itaration
          
      }
  }
}
console.log(findLagestValInSubArray(arr,ans))