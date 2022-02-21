function solution(num) {
  let count = 0;
  while (num > 1) {
    count++;
    num = num % 2 > 0 ? num * 3 + 1 : num / 2;
    if (count === 500) break;
  }

  return count === 500 ? -1 : count;
}
