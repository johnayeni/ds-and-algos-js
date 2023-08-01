/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function (matrix) {
  const matrixLength = matrix.length;
  const rowsLength = matrix[0].length;

  const ans = [];

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < rowsLength; j++) {
      if (Array.isArray(ans[j])) {
        ans[j][i] = matrix[i][j];
      } else {
        ans[j] = [matrix[i][j]];
      }
    }
  }

  return ans;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
