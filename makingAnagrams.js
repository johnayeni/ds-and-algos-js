/**
 * Given two strings,  and , that may not be of the same length,
 * determine the minimum number of character deletions required to make  and  anagrams.
 * Any characters can be deleted from either of the strings.
 * @param {*} s1
 * @param {*} s2
 * @returns
 */
function makingAnagrams(s1, s2) {
  const map = new Map();
  const intersection = [];

  for (let i = 0; i < s1.length; i++) {
    const x = map.get(s1[i]);
    if (x) {
      map.set(s1[i], x + 1);
    } else {
      map.set(s1[i], 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const count = map.get(s2[i]);
    if (count) {
      intersection.push(s2[i]);
      const newCount = count - 1;
      if (newCount === 0) {
        map.delete(s2[i]);
      } else {
        map.set(s2[i], newCount);
      }
    }
  }

  return s1.length - intersection.length + (s2.length - intersection.length);
}
