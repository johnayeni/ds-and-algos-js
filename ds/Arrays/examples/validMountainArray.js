/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;

  while (i < arr.length && arr[i + 1] > arr[i]) {
    i++;
  }

  if (i === arr.length - 1 || i === 0) {
    return false;
  }

  while (i < arr.length) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
    i++;
  }

  return true;
};
