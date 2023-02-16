function naiveGCD(a, b) {
  let gcd = Math.min(a, b);
  while (gcd > 0) {
    if (a % gcd == 0 && b % gcd == 0) break;
    gcd--;
  }
  return gcd;
}

function optimizedGCD(a,b){
	if(b==0) return a;
	return optimizedGCD(b,a%b);
}

const [a, b] = [100, 200];
const gcd = naiveGCD(a, b);
console.log(gcd);
