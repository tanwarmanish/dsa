function TOH(n, src = "A", inter = "B", dest = "C") {
  if (n === 1) {
    console.log(`Move 1 from ${src}--->${dest}`);
    return;
  }
  TOH(n - 1, src, dest, inter);
  console.log(`Move ${n} from ${src}--->${dest}`);
  TOH(n - 1, inter, src, dest);
}

const n = 3;
TOH(n);
