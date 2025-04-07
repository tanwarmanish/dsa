const number = 5;
const k = 1;

function isKBitSet(number: number, k: number): boolean {
  return number & (1 << (k - 1));
}

const result = `${k}th bit of ${number} is ${isKBitSet(number, k) ? "Set" : "not Set"}.`;
console.log(result);
