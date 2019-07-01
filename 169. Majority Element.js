/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let currCandidate = null;

  for (let n of nums) {
    if (count === 0) {
      currCandidate = n;
    }

    if (n === currCandidate) {
      count++
    }
    else {
      count--;
    }
  }

  return currCandidate;
};