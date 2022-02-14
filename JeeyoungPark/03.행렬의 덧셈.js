/**
 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */

// forEach를 사용해서 answer에 넣기
function solution(arr1, arr2) {
  let answer = [...arr1];

  arr1.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      answer[rowIndex][columnIndex] = column + arr2[rowIndex][columnIndex];
    });
  });

  return answer;
}

// map을 사용해서 새로운 배열로 반환하기
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
