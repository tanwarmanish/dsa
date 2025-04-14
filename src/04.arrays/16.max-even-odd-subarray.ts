const dataList = [7, 10, 13, 14];
// output 3

function maximumSubarrayOddEven(array: number[]): number {
  let currentCount = 1;
  let maxCount = 1;
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    const previous = array[i - 1];

    if (
      (current % 2 === 0 && previous % 2 !== 0) ||
      (current % 2 !== 0 && previous % 2 === 0)
    ) {
      currentCount++;
    } else {
      currentCount = 1;
    }
    maxCount = Math.max(maxCount, currentCount);
  }
  return maxCount;
}

const result = `Maximum odd-even subarray of ${dataList} are ${maximumSubarrayOddEven(dataList)}`;
console.log(result);
