// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// solution 1 : 1부터 n까지 for문 돌기
// O(n)
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

// solution 2 - 제곱근까지만 돌기
// O(logn)
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += i; // 1, 2, 3
      if (i !== n / i) {
        answer += n / i; // 12, 6, 4
      }
    }
  }
  return answer;
}
