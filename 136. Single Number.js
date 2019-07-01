/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
  }

  return single;
};

// Alt
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};

// A better explanation why this technique works-

// Let's say we have an array - [2,1,4,5,2,4,1].
// What we are doing is essentially this-

// => 0 ^ 2 ^ 1 ^ 4 ^ 5 ^ 2 ^ 4 ^ 1

// => 0 ^ 2^2 ^ 1^1 ^ 4^4 ^ 5 (Rearranging, taking same numbers together)

// => 0 ^ 0 ^ 0 ^ 0 ^ 5

// => 0 ^ 5

// => 5