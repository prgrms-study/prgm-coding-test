function solution(n) {
  var answer = parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  return answer;
}
