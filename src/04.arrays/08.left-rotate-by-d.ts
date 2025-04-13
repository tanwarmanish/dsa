const dataList = [1, 2, 3, 4, 5];
const d = 2;

function reverse(array: number[], from: number, to: number): void {
  while (from < to) {
    [array[from], array[to]] = [array[to], array[from]];
    from++;
    to--;
  }
}

function leftRotate(array: number[], d: number): number[] {
  // copy
  array = JSON.parse(JSON.stringify(array));

  const lastIndex = array.length - 1;

  // 1. reverse first d items
  reverse(array, 0, d - 1);

  // 2. reverse remaining items
  reverse(array, d, lastIndex);

  // 3. reverse entire array
  reverse(array, 0, lastIndex);

  return array;
}

const result = `Array ${dataList} after ${d} left rotation is ${leftRotate(dataList, d)}`;
console.log(result);
