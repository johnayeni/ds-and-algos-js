/**
 * Given an integer array nums and an integer k,
 * return true if there are two distinct indices i and j in the array
 *  such that nums[i] == nums[j] and abs(i - j) <= k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = hashMap.get(nums[i]);
    if (x !== undefined) {
      if (Math.abs(i - x) <= k) {
        return true;
      }
    }
    hashMap.set(nums[i], i);
  }
  return false;
}
