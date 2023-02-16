/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针
  const n = nums.length;
  let res = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < n - 2; i++) {
    // 数组排过序，如果第一个数大于0直接返回res
    if (nums[i] > 0) return res;

    // 不能有重复的三元组，但三元组内的元素是可以重复的
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = n - 1;
    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};
