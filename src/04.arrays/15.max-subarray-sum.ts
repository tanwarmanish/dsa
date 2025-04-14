// Kadane's Algorithm

const dataList = [2, 3, -8, 7, -1, 2, 3];
// output 11

function maximumSubarraySum(array: number[]): number {
  const maxSum = [array[0]];
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1] + array[i], array[i]);
    result = Math.max(result, maxSum[i]);
  }
  return result;
}

const result = `Maximum subarray sum of ${dataList} are ${maximumSubarraySum(dataList)}`;
console.log(result);
