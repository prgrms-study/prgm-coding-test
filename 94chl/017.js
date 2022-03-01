function solution(s, n) {
  let answer = "";
  let array = "abcdefghijklmnopqrstuvwxyz";
  let arrayU = array.toUpperCase();
  arrayU = arrayU.split("");
  array = array.split("");
  s.split("").forEach((str) => {
    let convert = str;
    if (str != " ") {
      let index =
        str.toUpperCase() == str
          ? arrayU.indexOf(str) + n
          : array.indexOf(str) + n;
      index = index > 25 ? index - 26 : index;
      convert = array.indexOf(str) >= 0 ? array[index] : arrayU[index];
    }
    answer += convert;
  });
  return answer;
}
