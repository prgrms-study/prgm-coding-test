function solution(num) {
  return num.replace(/\d(?=\d{4})/g, "*");
}
