// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let reg = /^[a-zA-Z]+$/;
  let piglay = [];
  let array = str.split(" ");
  array.map((word) => {
    let e = word.slice(0, 1);
    piglay.push(
      word.slice(1, word.length) + e + `${word.match(reg) ? "ay" : ""}`
    );
  });
  return piglay.join(" ");

}
