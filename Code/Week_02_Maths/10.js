function naivePower(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) result *= x;
  return result;
}

function efficientPower(x, y) {
  if (y === 0) return 1;
  else if (y % 2 === 0) {
    let result = efficientPower(x, y / 2);
    return result * result;
  }
  return x * efficientPower(x, y - 1);
}

function iterativePower(x, y) {
  let result = 1;
  while (y > 0) {
    if (y & 1) {
      // y%2==0
      // bit is 1
      result = result * x;
    }
    x = x * x;
    y = y >> 1; // y=Math.floor(y)
  }
  return result;
}

const [x, y] = [3, 4];
// const result = naivePower(x, y);
// const result = efficientPower(x, y);
const result = iterativePower(x, y);
console.log({ x, y, result });


