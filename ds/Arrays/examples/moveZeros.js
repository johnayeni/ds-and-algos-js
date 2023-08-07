/**
 * Given an integer array nums,
 * move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex += 1;
    }
  }

  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
