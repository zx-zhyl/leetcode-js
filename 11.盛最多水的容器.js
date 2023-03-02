/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;

  let max = 0;

  while (i !== j) {
    let leftHeight = height[i];
    let rightHeight = height[j];

    let x = j - i;
    let area;
    if (leftHeight > rightHeight) {
      area = rightHeight * x;
      j--;
    } else {
      area = leftHeight * x;
      i++;
    }
    max = area > max ? area : max;
  }

  return max;
};
// @lc code=end
