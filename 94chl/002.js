function solution(x, n) {
  var answer = [];
  const diff = x;
  while (answer.length < n) {
    answer.push(x);
    x += diff;
  }
  return answer;
}
