const solution = (a, b) =>
  [...Array(Math.abs(b - a) + 1)]
    .map((_, i) => Math.min(a, b) + i)
    .reduce((sum, n) => sum + n, 0);
