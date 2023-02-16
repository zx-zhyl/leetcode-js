/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// bfs
var largestValues = function (root) {
  if (!root) return [];
  let ques = [root],
    res = [];

  while (ques.length) {
    let len = ques.length,
      max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
      max = Math.max(ques[i].val, max);

      ques[i].left && ques.push(ques[i].left);
      ques[i].right && ques.push(ques[i].right);
    }

    res.push(max);

    for (let i = 0; i < len; i++) {
      ques.shift();
    }
  }

  return res;
};
// @lc code=end
