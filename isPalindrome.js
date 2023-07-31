/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 *  it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const str = s.toLowerCase();
  let p1 = 0;
  let p2 = str.length - 1;

  const rg = new RegExp("[a-z0-9]", "i");

  while (p1 < p2) {
    if (!rg.test(str.charAt(p1))) {
      p1 += 1;
      continue;
    }
    if (!rg.test(str.charAt(p2))) {
      p2 -= 1;
      continue;
    }

    if (str.charAt(p1) !== str.charAt(p2)) {
      return false;
    }
    p1 += 1;
    p2 -= 1;
  }

  return true;
};
