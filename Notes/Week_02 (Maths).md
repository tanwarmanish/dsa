
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

## 5. Greatest Common Divisor
Input - 100 200
Output - 100

```Javascript
// Naive Solution O(min(a,b))
function gcd(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) break;
    result--;
  }
  return result;
}
```

### Euclid Algorithm
**Concept**
- Let 'b' be smaller than 'a' then :
	- gcd( a ,b ) = gcd( a-b, b )

``` Javascript
// Euclid Algorithm
function gcd(a,b){
 while(a!=b){
   if(a>b) a-=b
   else b-=a
 }
  return a;
}
```

``` Javascript
// Optimized Euclid : O(log(min(a,b))
function gcd(a,b){
	if(b==0) return a;
	return gcd(b, a%b);
}
```


## 6. Least Common Multiple
Input - 4 6
Output - 12
``` Javascript
// Naive Solution
function lcm(a,b){
	let multiplier = Math.max(a,b);
	while(true){
		if(multiplier%a==0 && multiplier%b==0) break;
		multiplier++;
	}
	return multiplier;
}
```

``` Javascript
// Efficient Solution
function gcd(a,b){
  if(b==0) return a;
  return gcd(b,a%b);
}

function lcm(a,b){
  return (a*b)/gcd(a,b);
}
```

## 7. Check if number is Prime
Input - 14
Output - True

``` Javascript
// Naive Solution : O(n)
function isPrime(number) {
  if(number==1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
```

``` Javascript
// Concept: Divisors always appear in pairs
// Optimized Solution : O(sqrt(n))
function isPrime(number) {
  if (number == 1) return false;
  for (let i = 2; i * i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
```

``` Javascript
// Most Efficient Solution : O

function isPrime(number) {
  if (number == 1) return false;
  else if (number === 2 || number === 3) return true;
  else if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i < number; i += 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  return true;
}
```


## 8. All Divisors of Number
Input - 15
Output - 1 3 5 15

``` Javascript
// Naive Solution
function divisors(number) {
  let data = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) data.push(i);
  }
  return data;
}
```

``` Javascript
// Optimized Solution
function divisors(number) {
  const data = [];
  let i = 1;
  for (i = 1; i * i < number; i++) {
    if (number % i === 0) data.push(i);
  }
  for (; i >= 1; i--) {
    if (number % i == 0) data.push(number / i);
  }
  return data;
}
```


## 9. Sieve of Eratosthenes
Input - 10
Output - 2 3 5 7

``` Javascript
// Naive Solution
function primeNumbers(number) {
	const datalist = [];
	for (let itr = 2; itr < number; itr++) {
		if ( isPrime(itr) ) datalist.push(itr);
    }
    return datalist;
 }
```

``` Javascript
// Optimized Solution O(nlog(log(n)))
function primeNumbers(number) {
  let datalist = [];
  
  // populate datalist
  for (let itr = 0; itr <= number; itr++)
    datalist[itr] = itr >= 2 ? itr : false;

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
```


## 10. Computing Power (x^y)
Input - 3 4
Output - 81

``` Javascript
// Naive Solution : O(n)
function power(x,y){
	let result = 1;
	for(let i=0;i<y;i++) result *= x;
	return result;
}
```

#### Efficient Solution
``` Maths
pow(x,y) = {
	y % 2 ==0 ;  pow(x, y/2)
	else ; pow(x, y-1) * x
}
```

``` Javascript
// Efficient Solution : O(log n)
function power(x, y) {
  if (y === 0) return 1;
  else if (y % 2 === 0) {
    let result = power(x, y / 2);
    return result * result;
  }
  return x * power(x, y - 1);
}
```

#### Efficient Iterative Solution

``` Javascript
// Efficient Iterative Solution : O(log n)
function power(x, y) {
  let result = 1;
  while (y > 0) {
    if (y & 1) { // y%2 != 0
      // bit is 1
      result = result * x;
    }
    x = x * x;
    y = y >> 1;    // y = Math.floor(y / 2);
  }
  return result;
}
```



## 11. Modular Multiplicative Inverse

- Multiplicative Modulo Inverse exists only if A and m are coprime i.e. **gcd(A,m)=1**
- **A mod B = r**     =>    **A = B*q +r**
- Range of r  =>  0 to B-1