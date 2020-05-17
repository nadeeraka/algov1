

// ! version 2

const arr:number[] = [10,1,2,3,2,3,7,5,1,1,1,1,1,1,1,1,1,1,1,1]
const ans:number = 12
// ! solved
const findLagestValInSubArray= (arr:number[], n:number)=>
{
    let count:number = 0
    let itaration:number = 0
    let a = []
    

  for (let i = 0; i <arr.length; i++) {
      const element = arr[i];
      count += element
      //count
      if (count ==n) {
          //array slice is not woking properly
        a.push({itaration,i,val:i-itaration})
        itaration = i-1
        
        i = itaration
        count = 0
      }
      if (count>n ) {
          itaration = i-1
        
          i = itaration
          count = 0
         // itaration
          
      }
  }
 return a.sort((a,b)=>a.val-b.val)[a.length-1]
  
}
console.log(findLagestValInSubArray(arr,ans))