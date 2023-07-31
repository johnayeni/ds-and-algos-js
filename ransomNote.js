/**
 * Given two strings ransomNote and magazine,
 *  return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const letterBank = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const count = letterBank.get(magazine[i]);
    if (count) {
      letterBank.set(magazine[i], count + 1);
    } else {
      letterBank.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const count = letterBank.get(ransomNote[i]);

    if (!count) {
      return false;
    }

    const newCount = count - 1;

    if (newCount === 0) {
      letterBank.delete(ransomNote[i]);
    } else {
      letterBank.set(ransomNote[i], newCount);
    }
  }

  return true;
};
