const a = 3;
const b = 10;

function power(x: number, y: number): number {
  if (y == 0) return 1;
  let partial = power(x, Math.floor(y / 2));
  partial *= partial;
  if (y % 2 == 0) return partial;
  return x * partial;
}

const result = `${a}^${b} is ${power(a, b)}.`;
console.log(result);
