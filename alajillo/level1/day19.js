function solution(n) {
  const waterMelon = ["수", "박"];
  return [...Array(n)].map((_, index) => waterMelon[index % 2]).join("");
}
