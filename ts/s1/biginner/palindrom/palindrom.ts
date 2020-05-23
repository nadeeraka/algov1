const s = "ssss";

function checkPalindrom(params: string): boolean {
  let arr = s.split("");
  let isTrue: boolean = false;
  const mid: boolean = arr.length % 2 === 1;
  const next = (x) => arr[arr.length - x - 1];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (mid) {
      if (element === next(i)) {
        isTrue = true;
      } else {
        return false;
      }
    }
    if (element === next(i)) {
      i = i === arr.length / 2 ? arr.length : i;
      isTrue = true;
    } else {
      return false;
    }
  }

  return isTrue;
}

console.log(checkPalindrom(s));
