/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s.charAt(i))) {
      stack.push(s.charAt(i));
    } else {
      const openBracket = openBrackets[closeBrackets.indexOf(s.charAt(i))];
      if (stack[stack.length - 1] !== openBracket) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}
