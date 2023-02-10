function checkIsPalindrome(number) {
  const originalNumber = number;
  let reverseNumber = 0;
  // reverse number
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
	// compare
  const isPalindrome = originalNumber == reverseNumber;
  return isPalindrome;
}

const number = 12321;
const isPalindrome = checkIsPalindrome(number);
console.log({ number, isPalindrome });
