const number = 4;

function isPowerOf2(number): boolean {
  let count = 0;
  while (number > 0) {
    number = number & (number - 1);
    count++;
    if (count > 1) return false;
  }
  console.log(count);
  return true;
}

const result = `${number} is ${isPowerOf2(number) ? "" : "not a"} Power of 2.`;
console.log(result);
