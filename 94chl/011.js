function solution(n) {
  let answer = 0;
  const sqrt = Math.sqrt(n);
  answer = sqrt == Math.floor(sqrt) ? (sqrt + 1) ** 2 : -1;

  return answer;
}
