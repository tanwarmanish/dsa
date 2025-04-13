const dataList = [2, 3, 10, 10, 50];

function reverse(array: number[]): boolean {
  // copy
  array = JSON.parse(JSON.stringify(array));
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex < endIndex) {
    [array[startIndex], array[endIndex]] = [array[endIndex], array[startIndex]];
    startIndex++;
    endIndex--;
  }
  return array;
}

const result = `Reverse of array ${dataList} is ${reverse(dataList)}`;
console.log(result);
