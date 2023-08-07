// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber(arr) {
  const hashSet = new Set();
  let sumOfSet = 0;
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!hashSet.has(arr[i])) {
      hashSet.add(arr[i]);
      sumOfSet += arr[i];
    }

    sumOfArr += arr[i];
  }

  return 2 * sumOfSet - sumOfArr;
}

console.log(singleNumber([4, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
