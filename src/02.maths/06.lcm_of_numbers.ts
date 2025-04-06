const a = 12;
const b = 15;
// result 60

function lcm(a: number, b: number): number {
  // lcm*gcd=a*b
  return (a * b) / gcd(a, b);
}

function gcd(a: number, b: number): number {
  if (b == 0) return a;
  return gcd(b, a % b);
}
const result = `LCM of ${a}  & ${b} is ${lcm(a, b)}`;
console.log(result);
