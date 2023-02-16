/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const strMap = {
      "{": "}",
      "(": ")",
      "[": "]",
    },
    stack = [];

  for (str of s) {
    if (str in strMap) {
      stack.push(strMap[str]);
    } else {
      if (stack.length === 0 || stack.pop() !== str) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// @lc code=end
