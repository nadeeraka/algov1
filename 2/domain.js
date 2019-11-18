
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

function domainName(params) {
    
    let fLetter = 0
    let array = params.split('')
    let start = array.indexOf('/')
    let wStart = array.indexOf('w')
    let end = 0
    if (wStart == 0) {
        let s = 4
        let temp = array.slice(s)
        let e = temp.indexOf('.')
        let checkEnd = array.slice(s,s+e)
    
    return checkEnd.join('') 

    }
    if(array[start+2]==='w')
    {
 fLetter =start+6;
    }else{
        fLetter = start+2
    }
    let checkEnd = array.slice(fLetter)
    end =checkEnd.indexOf('.')
    
    checkEnd = array.slice(fLetter,fLetter+end)
    
    return checkEnd.join('') 

}
