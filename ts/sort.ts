// filter elements except 1st array

//https://medium.com/@george.seif94/a-tour-of-the-top-5-sorting-algorithms-with-python-code-43ea9aa02889
let arr1 = ["foo", "bar", "foobar"];
let arr2 = ["bar", "foo"];
let nArr;

const findExceptItems = () => {
  let isEqul = false;
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];

    for (let x = 0; x < arr2.length; x++) {
      const element2 = arr2[x];
      if (element2 === element) {
        isEqul = true;
      }
    }
    if (!isEqul) {
      nArr.push(element);
    }
  }
  return nArr
};

// sort uniq items

//sort using buble sort
