const dataList = [5, -2, 3, 4];
// output 12

function maximumSubarraySum(array: number[]): number {
  let maxSum = [array[0]];
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1] + array[i], array[i]);
    result = Math.max(result, maxSum[i]);
  }
  return result;
}

function minimumSubarraySum(array: number[]): number {
  const minSum = [array[0]];
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    minSum[i] = Math.min(minSum[i - 1] + array[i], array[i]);
    result = Math.min(result, minSum[i]);
  }
  return result;
}

function maximumCircularSubarraySum(array: number[]): number {
  const arraySum = array.reduce((agg, value) => agg + value, 0);
  const maxNormalSum = maximumSubarraySum(array);
  const minNormalSum = minimumSubarraySum(array);
  const maxSum = Math.max(maxNormalSum, arraySum - minNormalSum);
  return maxSum;
}

const result = `Maximum circular subarray sum of ${dataList} is ${maximumCircularSubarraySum(dataList)}`;
console.log(result);
