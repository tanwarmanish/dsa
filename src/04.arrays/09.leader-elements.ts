// leader : an element is leader if everything to its right is small.
const dataList = [7, 10, 4, 10, 6, 5, 2];
// output: 2,5,6,10

function leaders(array: number[]): number[] {
  const leaders: number[] = [];
  let lastMax = Number.MIN_SAFE_INTEGER;

  for (let index = array.length - 1; index >= 0; index--) {
    const currentItem = array[index];
    if (currentItem > lastMax) {
      leaders.push(currentItem);
      lastMax = currentItem;
    }
  }

  return leaders;
}

const result = `Leaders of array ${dataList} are ${leaders(dataList)}`;
console.log(result);
