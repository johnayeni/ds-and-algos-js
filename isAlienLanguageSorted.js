const isAlienLanguageSorted = (words, order) => {
  if (words.length < 2) return true;

  const orderIndex = new Map();

  for (let i = 0; i < order.length; i++) {
    orderIndex.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const firstWord = words[i];
    const secondWord = words[i + 1];

    for (let j = 0; j < firstWord.length; j++) {
      if (j >= secondWord.length) {
        return false;
      }

      if (firstWord[j] === secondWord[j]) continue;

      const firstCharIndex = orderIndex.get(firstWord[j]);
      const secondCharIndex = orderIndex.get(secondWord[j]);

      if (firstCharIndex > secondCharIndex) return false;
      if (secondCharIndex > firstCharIndex) break;
    }
  }

  return true;
};

console.log(
  isAlienLanguageSorted(["hello", "uber"], "huabcdefgijklmnopqrstvwxyz")
); // true
console.log(
  isAlienLanguageSorted(["word", "world", "row"], "worldabcefghijkmpqstuvxyz")
); // false
console.log(
  isAlienLanguageSorted(["word", "wor", "row"], "worldabcefghijkmpqstuvxyz")
); // false
