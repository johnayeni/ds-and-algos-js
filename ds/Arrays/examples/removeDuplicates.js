/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return;
  }
  let p1 = 0;
  let p2 = 1;
  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      p1 += 1;
      p2 += 1;
    } else {
      nums.splice(p2, 1);
    }
  }
};
