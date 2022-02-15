const solution = pn =>
  [...pn]
    .reverse()
    .map((n, i) => (i < 4 ? n : '*'))
    .reverse()
    .join('');
