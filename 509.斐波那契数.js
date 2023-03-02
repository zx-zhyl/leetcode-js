/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 递归 从n开始
var map = {
  0: 0,
  1: 1,
};
var fib = function (n) {
  if (map.hasOwnProperty(n)) return map[n];
  else {
    map[n] = fib(n - 1) + fib(n - 2);
    return map[n];
  }
};

// 动态规划 从 0 开始
// var fib = function (n) {
//   let map = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     map.push(map[i - 1] + map[i - 2]);
//   }
//   return map[n];
// };

// @lc code=end
