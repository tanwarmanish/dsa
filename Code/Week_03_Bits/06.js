function powerSet(str) {
  let setSize = Math.pow(2, str.length);
  let sets = [];
  for (let i = 0; i < setSize; i++) {
    let set = "";
    for (let j = 0; j < str.length; j++) {
      if (i & (1 << j)) {
        set += str[j];
      }
    }
    sets.push(set);
  }
  return sets;
}

const str = "abc";
const pSet = powerSet(str);
console.log(pSet);
