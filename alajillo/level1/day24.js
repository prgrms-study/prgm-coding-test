function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s.split("").forEach((char) => {
    if (char.toLowerCase() === "p") pCount++;
    if (char.toLowerCase() === "y") yCount++;
  });
  const result = pCount === yCount;
  return result;
}
