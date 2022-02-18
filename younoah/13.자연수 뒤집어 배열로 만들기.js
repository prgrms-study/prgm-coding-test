const solution = n => [...String(n)].map(Number).reduce((sum, n) => sum + n, 0);
