const bubbleSort = function (nums) {
  let swapped = false;
  do {
    swapped = false;
    nums.forEach((num, i) => {
      if (num > nums[i + 1]) {
        nums[i] = nums[i + 1];
        nums[i + 1] = num;
        swapped = true;
      }
    });
  } while (swapped);

  return nums;
};

console.log(bubbleSort([4, 16, 1, 32, 8]));
