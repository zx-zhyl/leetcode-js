/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //典型的窗口移动
  let l = s.length,
    left = 0,
    right = -1,
    map = {},
    max = 0;

  while (left < l) {
    let nextStr = s[right + 1];
    if (!map[nextStr] && nextStr !== undefined) {
      map[nextStr] = 1;
      right++;
    } else {
      map[s[left]] = 0;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
// @lc code=end
