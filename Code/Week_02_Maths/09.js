function isPrimer(number) {
  return true;
}

function primeNumbers(number) {
  const datalist = [];
  for (let itr = 2; itr < number; itr++) {
    if (isPrime(itr)) datalist.push(itr);
  }
  return datalist;
}

function optimizedPrimeNumbers(number) {
  let datalist = [];

  // populate datalist
  for (let itr = 0; itr <= number; itr++) {
    datalist[itr] = itr >= 2 ? itr : false;
  }

  // remove non-primes
  for (let i = 2; i * i < number; i++) {
    if (datalist[i]) {
      for (let j = 2 * i; j <= number; j += i) {
        datalist[j] = false;
      }
    }
  }
  return datalist.filter((v) => v);
}

const number = 12;
const datalist = optimizedPrimeNumbers(number);
console.log(datalist);
