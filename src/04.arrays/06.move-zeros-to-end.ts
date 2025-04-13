const dataList = [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 3, 4, 0, 0, 6, 7, 0];

function moveZeros(array: number[]): number[] {
  // copy
  array = JSON.parse(JSON.stringify(array));

  let nonZeroCount = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      [array[index], array[nonZeroCount]] = [array[nonZeroCount], array[index]];
      nonZeroCount++;
    }
  }

  return array;
}

const result = `Array ${dataList} after moving zeros ${moveZeros(dataList)}`;
console.log(result);
