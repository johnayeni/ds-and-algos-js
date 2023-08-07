/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break;
    }

    if (p1 > -1 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[p] = nums2[p2];
      p2 -= 1;
    }
  }
};
