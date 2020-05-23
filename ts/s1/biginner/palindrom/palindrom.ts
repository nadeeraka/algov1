const s = 'ssss'

function checkPalindrom(params:string):boolean {
    
    let arr = s.split('')
   let isTrue:boolean = false
const mid:boolean = arr.length%2 ===1;
const next = (x)=> arr[((arr.length)-x)-1]
console.log(arr.length)


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (mid) {
            console.log(element)
            //i === Math.floor((arr.length/2)-1) ? i = arr.length : ''
            console.log(next(i))
            console.log(arr[(arr.length-i)-1])
            if (element === next(i)) {

                console.log(next(i))
            isTrue = true;
            }
            else{
                console.log(element)
                return false
            }
            console.log(element)
          
            
        } 
        if(element === next(i)){
           
           i =  i=== arr.length/2? arr.length:i
           isTrue = true;
        }else{
            return false
        }
        
        
    }
    
    return isTrue
}

console.log(checkPalindrom(s))