// https://leetcode.com/problems/maximum-subarray/
// https://leetcode.com/submissions/detail/611917304/

function maxSubArray(nums: number[]): number {
    let answer = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            answer = Math.max(sum, answer);
            if (sum < 0) {
                i = j; // will be immediately incremented
                break;
            }
        }
    }
    
    return answer;
};
