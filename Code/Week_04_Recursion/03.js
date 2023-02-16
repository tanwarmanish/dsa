function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

const number = 5;
const result = factorial(number);
console.log(result);
