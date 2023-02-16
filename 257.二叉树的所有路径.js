/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

// dfs 深度优先搜索
var binaryTreePaths = function (root) {
  let res = [];

  const dfs = function (node, path) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      res.push(path + node.val);
    }
    dfs(node.left, path + node.val + "->");
    dfs(node.right, path + node.val + "->");
  };

  dfs(root, "");

  return res;
};

// @lc code=end
