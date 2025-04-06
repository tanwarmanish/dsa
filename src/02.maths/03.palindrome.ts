const number = 12343214;

function isPalindrome(number: number): boolean {
  const reverse = reverseNumber(number);
  console.log(reverse);
  return reverse == number;
}

function reverseNumber(number: number): number {
  let reverse = 0;
  while (number > 0) {
    const lastDigit = number % 10;
    reverse = 10 * reverse + lastDigit;
    number = Math.floor(number / 10);
  }
  return reverse;
}

const result = `Number ${number} is${isPalindrome(number) ? "" : " not"} Palindrome`;
console.log(result);
