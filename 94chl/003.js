function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arrSum = [];
    for (let o = 0; o < arr1[i].length; o++) {
      arrSum.push(arr1[i][o] + arr2[i][o]);
    }
    answer.push(arrSum);
  }
  return answer;
}
