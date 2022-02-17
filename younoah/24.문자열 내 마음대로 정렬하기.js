const solution = (s, n) =>
  s.sort((a, b) => {
    return a[n] === b[n] ? (a > b) - (a < b) : (a[n] > b[n]) - (a[n] < b[n]);
  });
