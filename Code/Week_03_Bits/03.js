function Method1(number, k) {
  return !!(number & (1 << k));
}

function Method2(number, k) {
  return !!((number >> k) & 1);
}

const number = 8;
const k = 2;
let isSet = Method1(number, k);
console.log(isSet);
isSet = Method2(number, k);
console.log(isSet);
