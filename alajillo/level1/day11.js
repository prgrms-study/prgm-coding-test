function solution(n) {
  const sqrt = Math.sqrt(n);
  const isInt = sqrt % 1 === 0;
  return isInt ? Math.pow(sqrt + 1, 2) : -1;
}
