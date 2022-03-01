function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((arr, i) => arr + Number(i), 0);
}
