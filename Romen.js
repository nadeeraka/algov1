const romanNumberConverter = num => {
  let number = [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let arr = [];
  let val = num / 10;
  if (val < 1) {
    return number[num];
  } else if (val <= 4) {
    let temp = Math.floor(val);
    for (let i = 0; i < temp; i++) {
      arr.push("X");
    }
    let leftOver = num - arr.length * 10;
    leftOver > 0 ? arr.push(number[leftOver]) : null;
  } else if (val > 4 && val < 5) {
    let leftOver = num - 40;
    leftOver > 0 ? arr.push("XL", number[leftOver]) : null;
  }
  return arr.join("");
};

console.log(romanNumberConverter(40));
