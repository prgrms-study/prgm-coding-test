function solution(s, n) {
  return s
    .split("")
    .map((str) => str.charCodeAt(0))
    .map((code) => {
      if (code === 32) return code;
      if (code > 64 && code < 91) {
        const newCode = code + n;
        if (newCode > 90) return newCode - 26;
        return newCode;
      }
      if (code > 96 && code < 123) {
        const newCode = code + n;
        if (newCode > 122) return newCode - 26;
        return newCode;
      }
    })
    .map((code) => String.fromCharCode(code))
    .join("");
}
