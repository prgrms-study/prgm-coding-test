function solution(n) {
  let cnt = 0;

  const collatz = n => (n % 2 === 0 ? n / 2 : n * 3 + 1);

  while (n > 1) {
    cnt++;
    n = collatz(n);
  }

  return cnt > 500 ? -1 : cnt;
}
