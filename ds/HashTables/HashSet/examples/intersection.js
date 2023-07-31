// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.
function intersection(nums1, nums2) {
  const hashSet1 = new Set(nums1);
  const hashSet2 = new Set(nums2);
  const intersection = [];

  if (hashSet1.size < hashSet2.size) {
    for (let n of hashSet1) {
      if (hashSet2.has(n)) {
        intersection.push(n);
      }
    }
  } else {
    for (let n of hashSet2) {
      if (hashSet1.has(n)) {
        intersection.push(n);
      }
    }
  }

  return intersection;
}
