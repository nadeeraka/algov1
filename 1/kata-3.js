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
// TODO

//   Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

// Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

// Examples:

// "The quick brown fox jumps over the lazy dog."
// -> "The quick brown fox jumps over the lZY DOG."

// "The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness."
// -> "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS."

// "aAaaaaAaaaAAaAa"
// -> ""


// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 


function DNAStrand(params) {
    let nArr = []
    let arr = params.split('');
   for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A' ||arr[i] === 'T'  ) {
            arr[i]==='A'?nArr.push('T'):nArr.push('A')
        }     
        else if (arr[i] === 'C' ||arr[i] === 'G'  ) {
            arr[i]==='C'?nArr.push('G'):nArr.push('C')
        }     
            
        
   }
   return nArr.join('')
   
}
