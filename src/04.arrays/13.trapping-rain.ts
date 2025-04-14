const dataList = [5, 0, 6, 2, 3];
// output: 6

function trappedWater(height: number[]): number {
  let total_water = 0;
  for (let index = 1; index < height.length - 1; index++) {
    let left_max = height[index];
    for (let i = 0; i < index; i++) {
      left_max = Math.max(left_max, height[i]);
    }

    let right_max = height[index];
    for (let i = 0; i < index; i++) {
      right_max = Math.max(right_max, height[i]);
    }

    total_water += Math.min(left_max, right_max) - height[index];
  }
  return total_water;
}

function trappedWaterPrecomputed(height: number[]): number {
  let total_water = 0;
  const l_max = height.map((v) => v);
  const r_max = height.map((v) => v);

  for (let i = 1; i < height.length; i++) {
    l_max[i] = Math.max(l_max[i - 1], l_max[i]);
    const j = height.length - i - 1;
    r_max[j] = Math.max(r_max[j], r_max[j + 1]);
  }

  for (let i = 1; i < height.length; i++) {
    total_water += Math.min(r_max[i], l_max[i]) - height[i];
  }

  return total_water;
}

const result = `Amount of water trapped by ${dataList} is ${trappedWaterPrecomputed(dataList)}`;
console.log(result);
