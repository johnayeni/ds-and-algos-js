/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }

    set.add(s[right]);

    max = Math.max(max, right - left + 1);

    right += 1;
  }

  return max;
};
