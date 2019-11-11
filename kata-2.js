// Fun with ES6 Classes #1 - People, people, people
// Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

class Person {
  constructor(firstName = "Jhon", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + " " + this.lastName;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// A palindrome is word which reads the same backwards as it does forwards.
// For example, pip is a palindrome, as pip backwards is still pip. kip, however, is not, for kip backwards is pik, not kip.
// Write a function, palindrome, which returns true if the passed string is a palindrome, regardless of capitalisation, and false otherwise.
function palindrome(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .reverse()
      .join("") == str.toLowerCase()
  );
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number
function persistence(params) {
  let val = true;
  result = 0;
  let r = params > 10 ? 1 : 0;
  if (r === 0) {
    return 0;
  }
  const res = () => {
    let arr;
    let e = [];
    if (result === 0) {
      arr = params + "".split("");
    } else {
      arr = result + "".split("");
    }
    for (let i = 0; i < arr.length; i++) {
      let num = parseInt(arr[i]);
      e.push(num);
    }
    const reducer = (acc, cur) => acc * cur;
    return (result = e.reduce(reducer));
  };

  res();
  while (val) {
    if (result >= 10 && r > 0) {
      res();
    } else {
      val = false;
    }
    r++;
    console.log(result);
  }

  return r - 1;
}

//decode-the-morse-code
function solution(params) {
  return morseCode
    .split("   ")
    .map(word =>
      word
        .split(" ")
        .map(code => MORSE_CODE[code] || "")
        .join("")
    )
    .join(" ")
    .trim();
}

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// ALGORITHMS ENCODING

// !

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

function jadeSmith(params) {
  return params
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

//longer vartion

function jadeSmith(params) {
  let arr = params.split('')
  let newArr = []
  let a = true;
  let temp 
  arr
      for (let i = 0; i < arr.length; i++) {
  
          if(i=== 0 )
          {
           temp = arr[i]
          temp =  temp.toUpperCase()
           newArr.push(temp)
           
          }
        else if (arr[i]== ' ') {
              temp = arr[i+1]
              if(!!temp)
              {
                  temp =  temp.toUpperCase()
              }
            
              newArr.push(arr[i])
              newArr.push(temp)
              a = false
            
          }else if (a == false) {
             a= true
              
          }else{
              newArr.push(arr[i])
          }
             
          
  
      }
      return newArr.join('')
  }
  