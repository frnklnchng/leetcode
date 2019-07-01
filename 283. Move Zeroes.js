/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastIndexOfZero = 0; // Where the last known 0 is located

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastIndexOfZero] = nums[i];

      if (lastIndexOfZero !== i) {
        nums[i] = 0;
      }

      lastIndexOfZero++;
    }
  }
};