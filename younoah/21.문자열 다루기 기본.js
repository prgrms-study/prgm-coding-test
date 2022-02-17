const solution = s =>
  (s.length === 4 || s.length === 6) &&
  [...s].every(c => [...Array(10)].map((_, i) => String(i)).includes(c));
