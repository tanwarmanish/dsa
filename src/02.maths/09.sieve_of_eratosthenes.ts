const number = 10;

function allPrimes(number: number): number[] {
  const primes = [...new Array(number + 1)].map((i) => true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < number + 1; i++) {
    if (!primes[i]) continue;
    let multiple = i * i;
    while (multiple < number + 1) {
      primes[multiple] = false;
      multiple += i;
    }
  }
  return primes.map((v, i) => (v ? i : 0)).filter((v) => v);
}

const result = `All prime number till ${number} are ${allPrimes(number)}`;
console.log(result);
