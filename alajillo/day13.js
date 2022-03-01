function solution(n) {
  return n
    .toString()
    .split("")
    .map((_, index) => Number(nArray[nArray.length - 1 - index]));
}
