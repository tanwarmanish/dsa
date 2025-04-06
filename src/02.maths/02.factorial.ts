const number = 5;

function factorial(number: number): number {
  if (!number) return 0;
  let result = 1;
  while (number) {
    result *= number;
    number--;
  }
  return result;
}

const result = `Factorial of ${number} is ${factorial(number)}`;
console.log(result);
