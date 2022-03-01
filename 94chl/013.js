function solution(n) {
  let answer = String(n)
    .split("")
    .reverse()
    .map((num) => parseInt(num));
  return answer;
}
