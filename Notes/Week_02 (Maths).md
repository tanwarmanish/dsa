
## 1. Count Digits
- Input - 9235
- Output - 4
``` Javascript
function countDigits(number) {
  let digits = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    digits++;
  }
  return digits;
}
```

- O(d), d <= number of digits in a number

## 2. Palindrome Number
- Input - 78987
- Output - Yes
	Step 1: Reverse the number
	Step 2: Compare both the numbers
	Step 3: If Same => Palindrome
	Step 4: Else => Not Palindrome
``` Javascript
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
```
- O(d), d is the number of digits in the input number


## 3.  Factorial of a Number
- Input - 5
- Output - 120
- O(n)
``` Javascript
// Iterative Solution
function calculateFactorial(number) {
  let factorial = 1;
  while (number > 0) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
}
```

``` Javascript
// Recursive Solution
function calculateFactorial(number) {
  if (number <= 0) return 1;
  return number * calculateFactorialRec(number - 1);
}
```


## 4. Trailing Zeros in Factorial of a number
- Input_1 - 5
- Output_1 - 1
- Input_2 - 100
- Output_2 - 24

```Javascript
// Method 1
function calculateTrailingZeros(number) {
  let trailingZeros = 0;
  while (number > 0) {
    let currNumber = number;
    while (currNumber % 5 === 0) {
      currNumber = currNumber / 5;
      trailingZeros++;
    }
    number--;
  }
  return trailingZeros;
}
```

``` Javascript
// Method 2
function calculateTrailingZeros(number) {
  let trailingZeros = 0;
  while (number > 0) {
    number = Math.floor(number / 5);
    trailingZeros += number;
  }
  return trailingZeros;
}
```

