/**
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
*/

// 풀이 1 - 반복문 사용
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  let a = Number(n[0]),
    b = Number(n[1]);

  let stemp = "";

  while (b > 0) {
    for (let i = 0; i < a; i++) {
      stemp += "*";
    }

    stemp += "\n";
    b--;
  }

  console.log(stemp);
});

// 풀이 2 - repeat 메소드 사용
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  let a = Number(n[0]),
    b = Number(n[1]);

  let row = "*".repeat(a) + "\n";

  console.log(row.repeat(b));
});
