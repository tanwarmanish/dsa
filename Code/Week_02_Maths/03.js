// Iterative Solution
function calculateFactorialIter(number) {
  let factorial = 1;
  while (number > 0) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
}

// Recursive Solution
function calculateFactorialRec(number) {
  if (number <= 0) return 1;
  return number * calculateFactorialRec(number - 1);
}

const number = 10;
let factorial = calculateFactorialIter(number);
console.log({ number, factorial });

factorial = calculateFactorialRec(number);
console.log({ number, factorial });
