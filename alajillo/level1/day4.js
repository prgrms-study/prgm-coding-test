function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    const isStar = phone_number.length - i - 1 < 4;
    answer += isStar ? phone_number[i] : "*";
  }
  return answer;
}
