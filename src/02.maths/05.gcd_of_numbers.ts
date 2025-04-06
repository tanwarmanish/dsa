const a = 12;
const b = 15;

function gcd_navie(a: number, b: number): number {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

function gcd_op(a: number, b: number): number {
  if (b == 0) return a;
  return gcd_op(b, a % b);
}

const result = `GCD of ${a}  & ${b} is ${gcd_op(a, b)}`;
console.log(result);
