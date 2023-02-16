function nFib(n) {
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  return nFib(n-1) + nFib(n-2);
}

const n = -1;
const result = nFib(n);	
console.log(result);
