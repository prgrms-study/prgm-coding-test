const solution = x =>
  x % [...String(x)].map(Number).reduce((n, sum) => (sum += n)) === 0;
