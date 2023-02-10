function countDigits(number) {
  let digits = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    digits++;
  }
  return digits;
}

const number = 9235;
const digits = countDigits(number);
console.log({ number, digits });
