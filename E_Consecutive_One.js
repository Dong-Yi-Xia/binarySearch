// You are given a list of integers nums which contains at least one 1. 
// Return whether all the 1s appear consecutively.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [0, 1, 1, 1, 2, 3]
// Output
// true
// Explanation
// All the 1s appear consecutively here in the middle.

// Example 2
// Input
// nums = [1, 1, 0, 1, 1]
// Output
// false
// Explanation
// There's two groups of consecutive 1s.


class Solution {
    solve(nums) {
        if(!nums.includes(1) )return null;
        let first = nums.indexOf(1);
        let last = nums.lastIndexOf(1);
        for(let i = first; i < last; i++){
            if(nums[i] !== 1){
                return false;
            }
        }
        return true
    }
}

const nums = [0, 1, 1, 1, 2, 3]
const aa = new Solution
console.log(aa.solve(nums))