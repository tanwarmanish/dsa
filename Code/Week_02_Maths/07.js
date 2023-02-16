function naivePrime(number) {
  if (number == 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

let itrs = 1;
function optimizedPrime(number) {
  if (number == 1) return false;
  for (let i = 2; i * i < number; i++) {
    if (number % i == 0) return false;
    itrs++;
  }
  return true;
}

function efficientPrime(number) {
  if (number == 1) return false;
  else if (number === 2 || number === 3) return true;
  else if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i < number; i += 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
    itrs++;
  }
  return true;
}

const number = 4632643;
const isPrime = optimizedPrime(number);
console.log({ number, isPrime, itrs });

itrs = 1;
const isPrime2 = efficientPrime(number);
console.log({ number, isPrime2, itrs });
