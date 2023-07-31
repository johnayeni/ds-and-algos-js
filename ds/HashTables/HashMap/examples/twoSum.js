/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number]}
 */
function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num2 = target - nums[i];
    const v = hashMap.get(num2);
    if (v !== undefined) {
      return [v, i];
    }
    hashMap.set(nums[i], i);
  }

  return [-1, -1];
}
