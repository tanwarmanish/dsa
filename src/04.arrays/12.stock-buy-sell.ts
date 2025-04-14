const dataList = [1, 5, 3, 8, 12];
// output: 13

function maximumProfitNaive(
  price: number[],
  start: number = 0,
  end: number = price.length - 1,
): number {
  if (start >= end) return 0;
  let profit = 0;
  for (let i = start; i <= end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (price[j] > price[i]) {
        let currentProfit = price[j] - price[i];
        currentProfit +=
          maximumProfitNaive(price, start, i - 1) +
          maximumProfitNaive(price, j + 1, end);
        profit = Math.max(profit, currentProfit);
      }
    }
  }
  return profit;
}

function maximumProfit(price: number[]): number {
  let profit = 0;
  for (let index = 1; index < price.length; index++) {
    const currentProfit = price[index] - price[index - 1];
    if (currentProfit > 0) profit += currentProfit;
  }
  return profit;
}
const result = `Maximum profit from stocks ${dataList} is ${maximumProfit(dataList)}`;
console.log(result);
