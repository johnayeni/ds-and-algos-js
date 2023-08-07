/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      while (nums[right] === val) {
        nums.pop();
        right -= 1;
      }

      if (right <= left) {
        break;
      }

      nums[left] = nums[right];
      nums.pop();
      right -= 1;
    }

    left += 1;
  }
};
