// https://leetcode.com/problems/two-sum/
// https://leetcode.com/submissions/detail/608025544/


function twoSum(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    if (dict.has(nums[i])) {
      return [dict.get(nums[i])!, i];
    }
    dict.set(target-nums[i], i);
  }
  
  return [];
};
