/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */
/**
 * @param {*} num
 * @returns
 */
const countDigits = (num) => {
  if (parseInt(num / 10, 10) === 0) {
    return 1;
  }

  return 1 + countDigits(parseInt(num / 10, 10));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (countDigits(nums[i]) % 2 === 0) {
      ans.push(nums[i]);
    }
  }

  return ans.length;
};
