const dataList = [1, 2, 3, 4, 5];

function leftRotateBy1(array: number[]): number[] {
  // copy
  array = JSON.parse(JSON.stringify(array));

  const firstElement = array[0];
  const lastIndex = array.length - 1;

  // swap remaining
  for (let index = 1; index <= lastIndex; index++) {
    array[index - 1] = array[index];
  }
  array[lastIndex] = firstElement;

  return array;
}

const result = `Array ${dataList} after left rotation by 1 is ${leftRotateBy1(dataList)}`;
console.log(result);
