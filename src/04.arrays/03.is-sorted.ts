const dataList = [2, 3, 10, 10, 50];

function isSorted(array: number[]): boolean {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) return false;
  }
  return true;
}

const result = `Array ${dataList} is ${isSorted(dataList) ? "sorted" : "not sorted"}`;
console.log(result);
