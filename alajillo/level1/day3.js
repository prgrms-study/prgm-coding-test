function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const resultArray = [];
    for (let j = 0; j < arr1[0].length; j++) {
      const result = arr1[i][j] + arr2[i][j];
      resultArray.push(result);
    }
    answer.push(resultArray);
  }
  return answer;
}
