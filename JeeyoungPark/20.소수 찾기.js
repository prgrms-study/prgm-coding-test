// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아닙니다.)

function solution(n) {
  let answer = 0;

  // n까지의 인덱스를 가진 배열 생성
  // 숫자 0과 1은 소수가 아니므로 false로 처리
  let numberList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i < n; i++) {
    if (numberList[i]) {
      // i의 배수를 모두 false로 변경
      for (let j = i * i; j <= n; j += i) {
        numberList[j] = false;
      }
    }
  }

  return numberList.filter((i) => i).length;
}
