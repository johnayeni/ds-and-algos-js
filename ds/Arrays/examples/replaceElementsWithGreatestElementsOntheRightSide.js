/**
 * Given an array arr,
 * replace every element in that array with the greatest element among the elements to its right,
 * and replace the last element with -1.
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  if (arr.length < 2) {
    return [-1];
  }
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    curr = arr[i];
    arr[i] = max;
    max = Math.max(curr, max);
  }

  return arr;
};
