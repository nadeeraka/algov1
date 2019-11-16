//Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function fbLike(arr) {
    let len = arr.length;
    if(len === 0)
    {
        return "no one likes this"
    }else if (len === 1) {
        return `${arr[0]}  likes this`

    }
    else if (len === 2) {
        return `${arr[0]} and ${arr[1]} like this`
    }else if (len === 3) {
        return `${arr[0]},  ${arr[1]} and ${arr[2]} like this`
    }else if (len >= 4) {
        return `${arr[0]}, ${arr[1]} and ${len-2} others like this`
    }
    

}

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
function list(array) {
    let newArray = [];
    let len = array.length - 2;
    let le = array.length - 1;
    
    if (array.length === 0) {
      return "";
    }
    for (let i = 0; i < array.length; i++) {
      if (le != i && len != i) {
          let str = `${array[i].name}`;
        newArray.push(str);
        
        
        newArray.push(', ');
      } else if (len === i) {
          let str = `${array[i].name}`;
        newArray.push(str);
        
        newArray.push(" & ");
      } else {
        let str = `${array[i].name}`;
        newArray.push(str);
  
      }
    }
    return newArray.join("");
  
  }
  