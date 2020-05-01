const woard = "aabbbsddffnmkl";

const fnrc = w => {
  let number = 0;
  const array = w.split("");
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let x = 0; x < array.length; x++) {
      const el = array[x];
      console.log(el);
      if (element === el) {
        number++;
        console.log(number);
        if (array.length === x+1) {
          if (number < 2) {
            return element;
          }
        }
      }else{
          number = 0;
      }
    }
  }
};
console.log(fnrc(woard));
//#
const woard = "aabcfg";
const n = []
let val =0
const fnrc = w => {
  let number = 0;
  const array = w.split("");
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let x = 0; x < array.length; x++) {
      const el = array[x];
      console.log(el)
      if (element === el) {
        number++;
        console.log(number);
        n.push(number)

      }else{
          number = 0;
          n.push(number)
      }
    }
  }
  for (let i = 0; i < n.length; i++) {
if (n[i]===1 && n[i+1] !== 2) {
    val = i
}      
  }
  //val
  const algo = Math.floor (val/2)-1
  return n

};
console.log(fnrc(woard));
