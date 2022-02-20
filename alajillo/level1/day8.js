function solution(n, m) {
  const answer = [];
  const min = [];
  const max = [];
  for (let i = 1; i <= n * m; i++) {
    if (n % i === 0 && m % i === 0) max.push(i);
    if (i % n === 0 && i % m === 0) min.push(i);
  }
  answer[0] = max.pop();
  answer[1] = min.shift();

  return answer;
}
