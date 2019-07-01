/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  let expectedSum = 0;
  let n = 1;

  for (let curr of nums) {
    sum += curr;
    expectedSum += n;
    n++;
  }

  return expectedSum - sum;
};