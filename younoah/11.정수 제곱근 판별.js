const solution = n => {
  let res = -1;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i * i === n) {
      res = Math.pow(i + 1, 2);
      break;
    }
  }

  return res;
};
