const isValidPattern = (pattern, strToMatch) => {
  const patternIndex = new Map();

  for (let i = 0; i < pattern.length; i++) {
    patternIndex.set(pattern[i], i);
  }

  let prevIndex = -1;

  for (let i = 0; i < strToMatch.length; i++) {
    const currChar = strToMatch.charAt(i);

    if (!patternIndex.has(currChar)) {
      continue;
    }

    const prevChar = strToMatch.charAt(prevIndex);

    if ((patternIndex.get(prevChar) ?? -1) > patternIndex.get(currChar)) {
      return false;
    }
    prevIndex = i;
  }

  return true;
};

console.log(isValidPattern("abcd", "axubbxcxbxd")); // false
console.log(isValidPattern("abcd", "axubbxcxxd")); // true
