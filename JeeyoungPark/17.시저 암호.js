function solution(s, n) {
  var answer = "";

  for (let string of s) {
    if (string === " ") {
      answer += string;
      continue;
    }

    // 대문자
    if (string.charCodeAt(0) <= 90) {
      string = string.charCodeAt(0) + n;

      while (90 < string) {
        string -= 26;
      }
    } else {
      string = string.charCodeAt(0) + n;

      while (122 < string) {
        string -= 26;
      }
    }

    answer += String.fromCharCode(string);
  }

  return answer;
}
