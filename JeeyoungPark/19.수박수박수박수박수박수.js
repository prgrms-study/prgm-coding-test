// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// solution 1
function solution(n) {
  let answer = "수";

  while (n - 1 > 0) {
    n--;
    answer += answer[answer.length - 1] === "수" ? "박" : "수";
  }
}

// solution 2 - repeat()
function solution(n) {
  let answer =
    n < 2
      ? "수"
      : n % 2 === 0
      ? "수박".repeat(n / 2)
      : "수박".repeat(n / 2) + "수";

  return answer;
}
