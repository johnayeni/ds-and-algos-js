/**
 * Given an array arr of integers, check if there exist two indices i and j such that :
   i != j
   0 <= i, j < arr.length
   arr[i] == 2 * arr[j]
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true;
    }
    set.add(arr[i]);
  }

  return false;
};
