function solution(x) {
  let numberList = x.toString().split("");
  let sum = numberList.reduce((a, b) => +b + +a);

  if (x % sum !== 0) return false;

  return true;
}
