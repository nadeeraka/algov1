// * take value and filtring based on that value


const algo =(x)=>{
    if (x==2) {
        return x;
    }
    return false
}
const arr = [1,2,3,4,5]

const  myFilter = (fun,array)=>
{
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
     if (fun(element)) {
         newArray.push(element)
     }   
    }
    return newArray

}

console.log(myFilter((x)=>x!==4,arr))