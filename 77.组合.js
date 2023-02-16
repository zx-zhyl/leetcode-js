/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  const helper = (cur, arr) => {
    if (arr.length === k) {
      res.push(arr);
      return;
    }
    // 还有 rest 个位置待填补
    let rest = k - arr.length;
    for (let i = cur; i <= n; i++) {
      if (n - i + 1 < rest) {
        continue;
      }
      helper(i + 1, arr.concat(i));
    }
  };

  helper(1, []);

  return res;
};
// @lc code=end
