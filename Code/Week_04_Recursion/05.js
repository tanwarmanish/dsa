function sum(number) {
  if (number <= 0) return 0;
  return number + sum(number - 1);
}

const number = 5;
const result = sum(number);
console.log(result);
