function solution(n) {
  var answer = n
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((str, index) =>
          index % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
        )
        .join("")
    )
    .join(" ");
  return answer;
}
