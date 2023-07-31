/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */
function isIsomorphic(s, t) {
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    const v = t[i];
    const x = map1.get(k);
    const y = map2.get(v);
    if (x !== undefined) {
      if (v !== x) {
        return false;
      }
    } else if (y !== undefined) {
      if (y !== k) {
        return false;
      }
    } else {
      map1.set(k, v);
      map2.set(v, k);
    }
  }
  return true;
}
