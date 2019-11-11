// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(params) {
    let x = 0;
    let o = 0;
    let arr = params.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "x") {
        x++;
      } else if (arr[i] == "o") {
        o++;
      }
    }
    if (x == o) {
      return true;
    }
    return false;
    
  }
  