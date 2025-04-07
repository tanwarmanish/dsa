const number = 7;

function setBitsCount(number: number): number {
  let count = 0;
  while (number > 0) {
    if (number & 1) count++;
    number = number >> 1;
  }
  return count;
}

function brianKerningam(number: number): number {
  let count = 0;
  while (number > 0) {
    number = number & (number - 1);
    count++;
  }
  return count;
}

const result = `${brianKerningam(number)} bits are set of ${number}`;
console.log(result);
