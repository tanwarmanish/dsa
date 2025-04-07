const number = 16;

function divisors(number: number): number[] {
  const allDivisors = [];
  let i = 1;
  for (; i * i < number; i++) {
    if (number % i == 0) allDivisors.push(i);
  }

  for (; i >= 1; i--) {
    if (number % i == 0 && number / i != 1) allDivisors.push(number / i);
  }
  return allDivisors;
}

const result = `Divisors of ${number} are ${divisors(number)}`;
console.log(result);
