const number = 19;

function isPrime(number: number): boolean {
  if (number == 1) return false;
  if (number == 1 || number == 3) return true;
  if (number % 2 == 0 || number % 3 == 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  return true;
}

const result = `${number} is ${isPrime(number) ? "a" : "not a"} Prime.`;
console.log(result);
