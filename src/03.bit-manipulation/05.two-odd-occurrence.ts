const dataList = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7];

function twoOdd(dataList: number[]): number[] {
  // step 1: xor value
  const xor = dataList.reduce((agg, value) => agg ^ value, 0);

  // step 2: last set bit
  const lastSetBit = xor & (xor - 1);
  const bitFilter = 1 << (lastSetBit - 1);

  // step 3: seperate dataList - set bit & unset bit
  let x = 0,
    y = 0;
  const unsetBitValues: number[] = [];
  dataList.forEach((value) => {
    if ((value & bitFilter) == 0) x = x ^ value;
    else y = y ^ value;
  });

  return [x, y];
}

const result = `${twoOdd(dataList)} is odd in ${dataList}`;
console.log(result);
