/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterMap = [
  " ", //0
  "", //1
  "abc", //2
  "def", //3
  "ghi", //4
  "jkl", //5
  "mno", //6
  "pqrs", //7
  "tuv", //8
  "wxyz", //9
];

let letterCombinations = function (digits) {
  let res = [];

  if (digits === "") {
    return res;
  }

  let findCombinations = (index, str) => {
    if (digits.length === index) {
      res.push(str);
      return;
    }

    let char = digits[index];
    let letters = letterMap[Number(char)];

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      findCombinations(index + 1, `${str}${letter}`);
    }
  };

  findCombinations(0, "");

  return res;
};
// @lc code=end
