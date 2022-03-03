function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((i, index) =>
          index % 2 === 0 ? i.toUpperCase() : i.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
