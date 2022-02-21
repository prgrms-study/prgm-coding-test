function solution(a, b) {
  var answer = [];
  let min, max;

  for (let i = 1; i <= Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) max = i;
    if ((i * Math.min(a, b)) % Math.max(a, b) === 0 && !min) {
      min = i * Math.min(a, b);
    }
  }

  answer.push(max, min);
  return answer;
}
