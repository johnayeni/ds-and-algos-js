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
  let lastNonDuplicateIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] === nums[lastNonDuplicateIndex] && i < nums.length) {
      i += 1;
    }

    if (i === nums.length) {
      break;
    }

    nums[lastNonDuplicateIndex + 1] = nums[i];
    lastNonDuplicateIndex += 1;
  }

  while (nums.length > lastNonDuplicateIndex + 1) {
    nums.pop();
  }
};
