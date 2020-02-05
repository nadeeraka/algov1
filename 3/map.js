// return new array accept function

// do((d)=>d)

// return new array accept function

// do((d)=>d)

const add = (a)=>a+1;

const myMap =(arg,arr)=>
{
    const array = [] 
    for (let i = 0; i < arr.length; i++) {
    
        let el = arr[i]
       array.push(arg(el)) 
       //array.push( arr[i]);
        
    }
    return array

}
console.log(myMap(add,[1,2,3]))