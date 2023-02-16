function printN(number) {
  if (number <= 0) return;
	printN(number-1)
	console.log(number);
}

const number = 5;
printN(number);
