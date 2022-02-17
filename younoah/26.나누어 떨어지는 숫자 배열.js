const solution = (arr, divisor) => {
  const res = arr.filter(val => val % divisor === 0).sort((a, b) => a - b);

  return res.length ? res : [-1];
};
