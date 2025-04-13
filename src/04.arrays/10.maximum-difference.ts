const dataList = [2, 3, 10, 6, 1, 8, 20];
// output: 8
// Note: j>i

function maximumDifference(array: number[]): number {
  let minValue = array[0];
  let maxValue = 0;
  for (let index = 1; index < array.length; index++) {
    minValue = Math.min(minValue, array[index]);
    maxValue = Math.max(maxValue, array[index] - minValue);
  }
  return maxValue;
}

const result = `Maximum Difference of array ${dataList} is ${maximumDifference(dataList)}`;
console.log(result);
