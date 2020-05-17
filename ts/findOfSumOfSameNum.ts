const ar:number[] = [2,2,2,1,1,0]

const addSameElements = (arr:number[])=>
{
    let myOb = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (myOb[element]) {
            myOb[element] =myOb[element]+element
        }else{
            myOb[element] = element
        }

    }
    return myOb
}
console.log(addSameElements(ar))
