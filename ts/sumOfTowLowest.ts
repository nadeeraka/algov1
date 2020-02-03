// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function lowestTow(arr:Array<number>):number{
    let minimum:number = 0
    let minimumArray :Array<number> = arr.sort((a,b)=>a-b)
    return  minimumArray[0]+minimumArray[1]
}

