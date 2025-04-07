const set = "123".split("");

function powerSet(set: string[]): string[] {
  const setSize = set.length;
  const powerSetSize = 1 << setSize;
  const powerSetList: string[] = [];

  for (let i = 0; i < powerSetSize; i++) {
    let powerSetItem = "";
    let j = i;
    let index = 0;
    while (j > 0) {
      const isSet = j & 1;
      if (isSet) {
        powerSetItem += set[index];
      }
      j = j >> 1;
      index++;
    }
    powerSetList.push(powerSetItem);
  }
  console.log(powerSetSize);
  return powerSetList;
}

const result = `Power set of ${set} is ${powerSet(set)}`;
console.log(result);
