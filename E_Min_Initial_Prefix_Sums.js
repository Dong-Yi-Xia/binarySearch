// You are given a list of integers nums. Return the minimum value we can append 
// to the beginning of nums such that prefix sums of the resulting list contains 
// numbers that are all greater than 0.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [2, -5, 3, 2]
// Output
// 4
// Explanation
// If we have append 4 to the list then we have [4, 2, -5, 3, 2].

// The prefix sums are then [4, 6, 1, 4, 3], all of which are > 0.


const nums = [2, -5, 3, 2]

class Solution {
    solve(nums) {

        let min = 0 //min prefix value
        let sum = 0 //running total
        for(let i=0; i<nums.length; i++){
            let num = nums[i]
            sum += num
            min = Math.min(min, sum) //compare the sum & min. Update the min value
        } 
        return 1-min //same as absolute min + 1
    }
}

const a = new Solution
console.log(a.solve(nums))