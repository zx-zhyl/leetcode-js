/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  let HOURS = [8, 4, 2, 1],
    MINS = [32, 16, 8, 4, 2, 1],
    res = [];

  function padLeft(num) {
    let str = num.toString();
    if (str.length === 1) {
      str = `0${str}`;
    }
    return str;
  }

  let combine = (arr, num) => {
    if (num === 0) {
      return [0];
    }
    let res = [];
    let helper = (start, prevCount, prevSum) => {
      if (prevCount === num) {
        res.push(prevSum);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        let cur = arr[i];
        helper(i + 1, prevCount + 1, prevSum + cur);
      }
    };
    helper(0, 0, 0);
    return res;
  };

  for (let i = 0; i <= turnedOn; i++) {
    let hours = combine(HOURS, i),
      mins = combine(MINS, turnedOn - i);

    for (let hour of hours) {
      if (hour > 11) continue;
      for (let min of mins) {
        if (min > 59) {
          continue;
        }
        res.push(`${hour}:${padLeft(min)}`);
      }
    }
  }

  return res;
};
// @lc code=end
