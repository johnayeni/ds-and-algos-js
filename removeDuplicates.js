const removeDuplicates = (str) => {
  return [...new Set(str.split(" "))].join(" ");
};

console.log(removeDuplicates("This is is a new new boy"));
