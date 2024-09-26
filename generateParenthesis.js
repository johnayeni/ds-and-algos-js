// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const answer = [];
  backtracking(answer, "", 0, 0, n);
  return answer;
};

const backtracking = (answer, curString, leftCount, rightCount, n) => {
  if (curString.length === 2 * n) {
    answer.push(curString);
    return;
  }

  if (leftCount < n) {
    curString += "(";
    backtracking(answer, curString, leftCount + 1, rightCount, n);
    curString = curString.slice(0, -1);
  }

  if (leftCount > rightCount) {
    curString += ")";
    backtracking(answer, curString, leftCount, rightCount + 1, n);
    curString = curString.slice(0, -1);
  }
};
