//Credit Card Mask
//https://www.codewars.com/kata/5412509bd436bd33920011bc
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

const maskify = (str: string):string => {
  const arr: string[] = str.split("");
  const len: number = arr.length;

  if (len === 0) {
    return null;
  }
  const mark: number = arr.length - 4;

  const maskedArray = arr.map((s, i) => {
    if (mark <= i) {
      return s;
    }
    return "#";
  });
  return maskedArray.join("");
};
