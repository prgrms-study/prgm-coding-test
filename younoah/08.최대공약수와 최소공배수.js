const solution = (n, m) => [gcd(n, m), lcm(n, m)];


// 최대 공약수(gcd)
const gcd = (a, b) => {
  let res = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) res = i;
  }

  return res;
}

// 최소 공배수(lcm)
const lcm = (a, b) => (a * b) / gcd(a, b);
