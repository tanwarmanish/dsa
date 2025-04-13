const dataList = [10, 2, 25, 20, 25, 1, 2, 5, 4, 6];

function largest(array: number[]): number {
  let lastMax = Number.MIN_SAFE_INTEGER;
  for (let value of array) {
    if (value >= lastMax) lastMax = value;
  }
  return lastMax;
}

const result = `Largest item in ${dataList} is ${largest(dataList)}`;
console.log(result);
