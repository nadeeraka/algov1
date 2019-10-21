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

// I	11	XI
// 2	II	12	XII
// 3	III	13	XIII
// 4	IV	14	XIV
// 5	V	15	XV
// 6	VI	16	XVI
// 7	VII	17	XVII
// 8	VIII	18	XVIII
// 9	IX	19	XIX
// 10	X	20	XX
