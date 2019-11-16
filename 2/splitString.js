
//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let arr = str.split('')
    let newArray = []
    let string =''

    for (let i = 0; i < arr.length; i++) {
        string = `${arr[i]}${arr[i+1]}`
            newArray.push(string)
            
        if (arr.length %2 === 1) {
            string = `${arr[i]}${arr[i+1]}`
            newArray.push(string)

        }else{
            
        }
        return newArray
        
        
    }
    
}
