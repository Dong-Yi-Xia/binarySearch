// Largest Gap
// Given a list of integers nums, return the largest difference of two 
// consecutive integers in the sorted version of nums.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [4, 1, 2, 8, 9, 10]
// Output
// 4
// Explanation
// The largest gap is between 4 and 8.

class Solution {
    solve(nums) {
        let max = 0
        nums = nums.sort((a,b) => a - b)
        for(let i=0; i<nums.length-1; i++){
            let diff = nums[i+1] - nums[i]
            max = Math.max(diff, max)
        }
        return max
    }
}