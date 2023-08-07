/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      count = 0;
    } else {
      count += 1;
      max = Math.max(count, max);
    }
  }

  return max;
};
