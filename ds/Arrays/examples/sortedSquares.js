/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const squares = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      squares.unshift(Math.pow(nums[left], 2));
      left += 1;
    } else {
      squares.unshift(Math.pow(nums[right], 2));
      right -= 1;
    }
  }

  return squares;
};
