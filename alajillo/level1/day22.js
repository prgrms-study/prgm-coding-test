function solution(s) {
  const lengthCheck = s.length === 4 || s.length === 6;
  let numberCheck = true;
  s.replace(/\D/, () => {
    numberCheck = false;
  });
  return lengthCheck && numberCheck;
}
