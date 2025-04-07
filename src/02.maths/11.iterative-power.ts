const a = 2;
const b = 10;

function iPower(x, y) {
  let partial = x;
  let result = 1;
  while (y > 0) {
    if (y % 2 != 0) {
      result *= partial;
    }
    partial *= partial;
    y = Math.floor(y / 2);
  }
  return result;
}

const result = `${a}^${b} is ${iPower(a, b)}.`;
console.log(result);
