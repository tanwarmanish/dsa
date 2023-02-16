function countSetBits(number) {
  let count = 0;
  while (number) {
    number &= number - 1;
    count++;
  }
  return count;
}

const number = 13;
const count = countSetBits(number);
console.log(count);
