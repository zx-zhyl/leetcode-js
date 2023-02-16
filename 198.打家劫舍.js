/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;

  let dp = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    robNow = nums[i] + (dp[i + 2] || 0);
    robNext = dp[i + 1] || 0;
    dp[i] = Math.max(robNow, robNext);
  }

  return dp[0];
};
// @lc code=end
