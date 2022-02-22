/**
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

// 풀이1
function solution(n, m) {
  var answer = [0, Math.max(n, m)];

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      answer[0] = i;
    }
  }

  for (let j = 1; j <= Math.max(n, m); j++) {
    if ((!Math.min(n, m) * j) % Math.max(n, m)) {
      answer[1] = Math.min(n, m) * j;
      break;
    }
  }

  return answer;
}

/**
 * 유클리드 호제법
 * gcd(a,b) === gcd(b, a % b)
 */
function solution(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
