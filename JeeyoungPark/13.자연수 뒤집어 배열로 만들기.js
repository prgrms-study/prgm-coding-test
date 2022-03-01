// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 문자로 풀이
function solution(n) {
  var answer = [];
  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}

// 숫자로 풀이
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10); // 5, 4, 3, 2, 1
    n = Math.floor(n / 10); // 1234, 123, 12, 1
  } while (n > 0);

  return arr;
}
