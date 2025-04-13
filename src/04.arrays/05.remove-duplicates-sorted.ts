const dataList = [10, 20, 30, 30, 30, 50];

function removeDuplicates(array: number[]): boolean {
  // copy
  array = JSON.parse(JSON.stringify(array));

  let slowIndex = 1;
  let fastIndex = 1;
  while (fastIndex < array.length) {
    if (array[slowIndex - 1] != array[fastIndex]) {
      array[slowIndex] = array[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  array = array.slice(0, slowIndex);
  return array;
}

const result = `Array ${dataList} after removing duplicates ${removeDuplicates(dataList)}`;
console.log(result);
