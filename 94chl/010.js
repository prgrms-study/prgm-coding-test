function solution(arr) {
  let min = Math.min(...arr);
  const answer = arr.filter((num) => num > min);
  return !answer.length ? [-1] : answer;
}
