function calculateTrailingZeros(number) {
  let trailingZeros = 0;
  while (number > 0) {
    number = Math.floor(number / 5);
    trailingZeros += number;
  }
  return trailingZeros;
}

const number = 100;
const trailingZeros = calculateTrailingZeros(number);
console.log({ number, trailingZeros });
