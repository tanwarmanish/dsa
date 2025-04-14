/*
  Majority Element: If Frequency of an element is > n/2
*/

const dataList = [8, 3, 4, 8, 8];
// output: 8

function majorityElement(array: number[]): number | null {
  let count = 1;
  let candidate = 0;

  // phase 1
  for (let i = 0; i < array.length; i++) {
    if (array[candidate] == array[i]) count++;
    else count--;
    if (count == 0) {
      candidate = i;
      count = 1;
    }
  }

  // phase 2
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[candidate] == array[i]) {
      count++;
    }
  }

  if (2 * count <= array.length) return null;
  return array[candidate];
}

const result = `Majority element of ${dataList} is ${majorityElement(dataList)}`;
console.log(result);
