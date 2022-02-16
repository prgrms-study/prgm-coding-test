function solution(x) {
  let answer = false;
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);
  answer = x % sum === 0 ? true : false;

  return answer;
}
