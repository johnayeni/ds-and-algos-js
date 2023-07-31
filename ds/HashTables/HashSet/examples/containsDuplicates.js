const { HashSet } = require("../HashSet");

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
function containsDuplicates(arr) {
  const hashSet = new HashSet();

  for (let i = 0; i < arr.length; i++) {
    if (hashSet.contains(arr[i])) {
      return true;
    }
    hashSet.add(arr[i]);
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 3, 4]));
console.log(containsDuplicates([2, 3, 6, 4]));
