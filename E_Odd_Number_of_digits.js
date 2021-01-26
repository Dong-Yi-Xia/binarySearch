// Given a list of positive integers nums, return the number of integers that have odd number of digits.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 800, 2, 10, 3]
// Output
// 4
// Explanation
// [1, 800, 2, 3] have odd number of digits.


class Solution {
    solve(nums) {
        let count = 0
        for(let i = 0; i < nums.length; i++){
           if(String(nums[i]).length % 2 === 1 ){
               count++
           }
        }
        return count
    }
}


const nums = [1, 800, 2, 10, 3]
const aa = new Solution
console.log(aa.solve(nums))