const dataList = [10, 10, 10, 25, 30, 30];
// output: 10 3, 25 1, 30 2

function frequencies(array: number[]): { [key: number]: number } {
  let index = 0;
  const result = {};
  while (index < array.length) {
    let count = 0;
    let countIndex = index;
    while (array[index] == array[countIndex] && countIndex < array.length) {
      count++;
      countIndex++;
    }
    result[array[index]] = count;
    index += count;
  }
  return result;
}

const result = `Frequencies of array ${dataList} are ${JSON.stringify(frequencies(dataList))}`;
console.log(result);
