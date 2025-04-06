let number = 5e4;

function countDigits(number: number): number {
  let counter = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    counter++;
  }
  return counter;
}

const result = `Number of Digits in ${number} are ${countDigits(number)}`;
console.log(result);
