function getDivisors(number) {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) divisors.push(i);
  }
  return divisors;
}

function optimizedDivisors(number) {
  const divisors = [];
  let i = 1;
  for (i = 1; i * i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  for (; i >= 1; i--) {
    if (number % i == 0) {
      divisors.push(number / i);
    }
  }
  return divisors;
}

const number = 15;
const divisors = optimizedDivisors(number);
console.log(divisors);
