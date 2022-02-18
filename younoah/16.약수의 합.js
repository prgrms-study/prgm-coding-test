const solution = targetNumber =>
  [...Array(targetNumber)]
    .map((_, i) => i + 1)
    .reduce((sum, n) => (targetNumber % n === 0 ? sum + n : sum), 0);
