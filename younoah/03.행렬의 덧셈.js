const solution = (arr1, arr2) =>
  arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));
