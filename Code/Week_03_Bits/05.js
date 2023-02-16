function findOccurrence(array) {
  // step 1 total XOR
  let totalXOR = 0;
  for (let value of array) totalXOR ^= value;

  // find last set bit
  let c = totalXOR & ~(totalXOR - 1);

  // seperating two numbers;
  let result = [0, 0];
  for (let value of array) result[(value & c) % 2] ^= value;
  return result;
}

const array = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7];
// const array = [1, 3, 2, 3, 3, 1];
const twoOdd = findOccurrence(array);
console.log(twoOdd);
