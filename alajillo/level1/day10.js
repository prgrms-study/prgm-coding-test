function solution(arr) {
  const min = Math.min(...arr);
  const index = arr.findIndex((el) => el === min);
  arr.splice(index, 1);
  return arr.length ? arr : [-1];
}
