const number = 100;

function trailingZeros(number: number): number {
  let divisor = 5;
  let counter = 0;
  let currentCount = Math.floor(number / divisor);
  while (currentCount) {
    counter += currentCount;
    divisor *= divisor;
    currentCount = Math.floor(number / divisor);
  }
  return counter;
}

const result = `Trailing zeros in Factorial of ${number} are ${trailingZeros(number)}`;
console.log(result);
