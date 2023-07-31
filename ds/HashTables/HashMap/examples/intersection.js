/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const hashMap = new Map();

  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      const x = hashMap.get(nums1[i]);
      if (x) {
        hashMap.set(nums1[i], x + 1);
      } else {
        hashMap.set(nums1[i], 1);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      const x = hashMap.get(nums2[i]);
      if (x) {
        hashMap.set(nums2[i], x + 1);
      } else {
        hashMap.set(nums2[i], 1);
      }
    }
  }

  const intersection = [];

  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      const x = hashMap.get(nums2[i]);
      if (x) {
        intersection.push(nums2[i]);
        hashMap.set(nums2[i], x - 1);
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      const x = hashMap.get(nums1[i]);
      if (x) {
        intersection.push(nums1[i]);
        hashMap.set(nums1[i], x - 1);
      }
    }
  }

  return intersection;
}
