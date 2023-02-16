function sum(number) {
  if (number <= 0) return 0;
  return (number % 10) + sum(Math.floor(number / 10));
}

const number = 253;
const output = sum(number);
console.log(output);
