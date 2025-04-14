const dataList = [5, 2, 1, 1, 2, 3, 1];
// output: 2

function consecutive1s(dataList: number[]): number {
  let max_count = 0;
  let count = 0;
  for (let i = 0; i < dataList.length; i++) {
    const value = dataList[i];
    count = value ? count + 1 : 0;
    max_count = Math.max(max_count, count);
  }
  return max_count;
}

const result = `Consecutive 1s in ${dataList} are ${consecutive1s(dataList)}`;
console.log(result);
