/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const hasMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const x = hasMap.get(s[i]);
    if (x !== undefined) {
      hasMap.set(s[i], x + 1);
    } else {
      hasMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    const x = hasMap.get(s[i]);
    if (x === 1) {
      return i;
    }
  }

  return -1;
}
