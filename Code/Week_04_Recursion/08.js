function calcCuts(ropeLength, cuts) {
  if (ropeLength == 0) return 0;
  else if (ropeLength < 0) return -1;
  result = Math.max(...cuts.map((cut) => calcCuts(ropeLength - cut, cuts)));
  if (result == -1) return -1;
  return result + 1;
}

const ropeLength = 5;
const cutLength = [1, 2, 5];
const numberOfCuts = calcCuts(ropeLength, cutLength);
console.log(numberOfCuts);
