// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(params) {
    return params.filter((e)=>typeof e == "number")
 }
//  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrl(url) {
    let array = url.split('')
    let newArray = []
     for (let i = 0; i < array.length; i++) {
      if(array[i] === '#')
         {
             i = array.length;
         }else{
  newArray.push(array[i])
         }
     }
     return newArray.join('')
 
 }
 