const dataList = [1, 2, 6, 3, 4, 5, 2, 1, 4, 5, 6];

function findOdd(dataList: number[]) {
  let result = 0;
  dataList.forEach((value) => {
    result = result ^ value;
  });
  return result;
}

const result = `${findOdd(dataList)} is odd in ${dataList}`;
console.log(result);
