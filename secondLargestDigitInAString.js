/**
 * Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
  let first = -1;
  let second = -1;

  const reg = new RegExp("[0-9]", "i");

  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      if (Number(s[i]) > first) {
        second = first;
        first = Number(s[i]);
      } else if (Number(s[i]) !== first && second < Number(s[i])) {
        second = Number(s[i]);
      }
    }
  }

  return second;
};
