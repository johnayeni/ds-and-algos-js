/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }

  return nums;
};
