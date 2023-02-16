function toNearest2(number) {
  let isPowerOf2 = number & (number - 1);
  return isPowerOf2 ? isPowerOf2 : number;
}

for (let i = 0; i < 20; i++) {
  console.log({ number: i, nearest: toNearest2(i) });
}
