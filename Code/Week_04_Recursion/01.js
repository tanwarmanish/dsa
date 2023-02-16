function printN(number) {
  if (number <= 0) return;
  console.log(number);
  printN(number - 1);
}

const number = 5;
printN(number);
