function solution(n) {
  if (n === 0) return 0;
  return [...Array(n)]
    .map((_, index) => index + 1)
    .filter((number) => n % number === 0)
    .reduce((a, b) => a + b);
}
