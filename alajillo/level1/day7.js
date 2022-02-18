function solution(num) {
  let result = num;
  let count = 0;
  while (result !== 1) {
    if (count === 500) return -1;
    count++;
    result = result % 2 ? result * 3 + 1 : result / 2;
  }
  return count;
}
