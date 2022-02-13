/**
 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 */

// 풀이 1 - for문 이용
function solution(x, n) {
  let answer = [];

  // return Array(n).fill(x).map((v, i) => (i + 1) * v)

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// 풀이 2 - Array를 만들어두고 map을 이용해 index 활용
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1));
}
