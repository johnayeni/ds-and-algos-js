/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 */

const longestConsecutive1 = function (nums) {
  if (nums.length < 1) {
    return 0;
  }

  const set = new Set(nums);

  let max = 1;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let streak = 1;

      while (set.has(curr + 1)) {
        streak += 1;
        curr = curr + 1;
      }

      max = Math.max(max, streak);
    }
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive2 = function (nums) {
  if (nums.length < 1) {
    return 0;
  }

  const sortedNums = nums.sort((a, b) => a - b);

  let count = 1;
  let max = 1;

  let i = 1;

  while (i < sortedNums.length) {
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      count += 1;
      max = Math.max(max, count);
    } else if (sortedNums[i] - sortedNums[i - 1] !== 0) {
      count = 1;
    }

    i += 1;
  }

  return max;
};
