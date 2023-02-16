/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [],
    columns = [], // 记录已经被使用的列
    dia1 = [],
    // 已摆放皇后的对角线1下标 左下 -> 右上
    // 计算某个坐标是否在这个对角线的方式是「行下标 + 列下标」是否相等
    dia2 = [];
  // 已摆放皇后的对角线2下标 左上 -> 右下
  // 计算某个坐标是否在这个对角线的方式是「行下标 - 列下标」是否相等

  // 在选择当前的格子后 记录状态
  const record = (rowIndex, columnIndex, bool) => {
    columns[columnIndex] = bool;
    dia1[rowIndex + columnIndex] = bool;
    dia2[rowIndex - columnIndex] = bool;
  };

  // 生成二维数组的辅助函数
  function generateBoard(row) {
    let n = row.length;
    let res = [];
    for (let y = 0; y < n; y++) {
      let cur = "";
      for (let x = 0; x < n; x++) {
        if (x === row[y]) {
          cur += "Q";
        } else {
          cur += ".";
        }
      }
      res.push(cur);
    }
    return res;
  }

  // 尝试在一个n皇后问题中 摆放第index行内的皇后位置
  const helper = (rowIndex, prev) => {
    // 能遍历到最后一行，说明方案可行
    if (rowIndex === n) {
      res.push(generateBoard(prev));
      return;
    }

    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // 在列上不冲突
      let columnNotConflict = !columns[columnIndex];
      // 在对角线1上不冲突
      let dia1NotConflict = !dia1[rowIndex + columnIndex];
      // 在对角线2上不冲突
      let dia2NotConflict = !dia2[rowIndex - columnIndex];

      // 都不冲突，进入下一轮递归
      if (columnNotConflict && dia1NotConflict && dia2NotConflict) {
        record(rowIndex, columnIndex, true);
        helper(rowIndex + 1, prev.concat(columnIndex));
        // 递归出栈后，在状态中清除这个位置的记录，下一轮循环应该是一个全新的开始。
        record(rowIndex, columnIndex, false);
      }
    }
  };

  helper(0, []);

  return res;
};
// @lc code=end

solveNQueens(4);
