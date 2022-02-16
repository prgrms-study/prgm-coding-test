const solution = (x) =>
  x %
  x
    .toString()
    .split("")
    .map((string) => Number(string))
    .reduce((a, b) => a + b)
    ? false
    : true;
