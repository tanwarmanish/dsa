const dataList = [10, 2, 20, 25, 25, 1, 2, 5, 4, 6];

function secondLargest(array: number[]): number {
  let lastMax = Number.MIN_SAFE_INTEGER;
  let secondLastMax = Number.MIN_SAFE_INTEGER;

  for (let value of array) {
    if (value > lastMax) {
      secondLastMax = lastMax;
      lastMax = value;
    } else if (value != lastMax && value > secondLastMax) {
      secondLastMax = value;
    }
  }
  console.log(secondLastMax, lastMax);
  return secondLastMax;
}

const result = `Second largest item in ${dataList} is ${secondLargest(dataList)}`;
console.log(result);
