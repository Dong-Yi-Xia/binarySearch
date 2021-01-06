// Given a list of integers nums, return whether the list is strictly 
// increasing or strictly decreasing.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 2, 3, 4, 5]
// Output
// true
// Explanation
// This is strictly increasing.

// Example 2
// Input
// nums = [1, 2, 3, 4, 5, 5]
// Output
// false
// Explanation
// Since there's two duplicate 5 this is not strictly increasing.

// Example 3
// Input
// nums = [5, 4, 3, 2, 1]
// Output
// true
// Explanation
// This is strictly decreasing.


const nums = [7, 5, 4, 1]

class Solution {
    solve(nums) {
        for(let i =0; i<nums.length; i++){
            let current = nums[i]
            let next = nums[i+1]
            let nextNext = nums[i+2]
                // increasing than decreasing
            if(current === next || (current < next && next >= nextNext)){
                return false
                // decreasing than increasing
            } else if (current === next || (current > next && next <= nextNext)){
                return false
            } 
        }
        return true
    }
}

const a = new Solution
console.log(a.solve(nums))