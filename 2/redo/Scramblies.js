// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True

function scramble(str1,str2) {

    let arr1 = str1.toUpperCase().split('')
    let arr2 = str2.toUpperCase().split('')
   let x = str1.match(/^[a-zA-Z]+$/)
   if(x === null)
   {
       return false
   }
    let count = 0

    for (let i = 0; i < arr2.length; i++) {
        
        if (arr1.indexOf(arr2[i] ) != -1) {
            count +=1
            
        }
        
    }
    return arr2.length === count

}
