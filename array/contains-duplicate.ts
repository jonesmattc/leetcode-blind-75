// https://leetcode.com/problems/contains-duplicate/
// https://leetcode.com/submissions/detail/611852985/

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for(const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};
