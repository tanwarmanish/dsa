// Input - 4
// Output - Yes ( 2^2 )

function isPowerOf2(number) {
  return !(number & (number - 1));
}

for (let i = 0; i <= 20; i++) {
  if (isPowerOf2(i)) {
    console.log(i);
  }
}
