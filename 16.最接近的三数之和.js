/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length == 3) return getSum(nums);

  let res = Number.MAX_SAFE_INTEGER,
    min = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = getSum([nums[i], nums[left], nums[right]]);
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }

      if (Math.abs(target - sum) < min) {
        min = Math.abs(target - sum);
        res = sum;
      }
    }
  }

  return res;
};

var getSum = (nums) => {
  return nums.reduce((a, b) => a + b, 0);
};

// @lc code=end
