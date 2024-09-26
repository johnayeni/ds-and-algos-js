const permutations = (str) => {
  const result = [];

  const backtrack = (branches, node) => {
    if (branches.length < 1) {
      result.push(node);
    } else {
      for (let i = 0; i < branches.length; i++) {
        backtrack(
          `${branches.slice(0, i)}${branches.slice(i + 1)}`,
          `${node}${branches.charAt(i)}`,
          result
        );
      }
    }
  };

  backtrack(str, "");
  return result;
};

console.log(permutations("abcd"));
