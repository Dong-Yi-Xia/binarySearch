// You are given a list of integers nums. Return the number of pairs i < j such that nums[i] = nums[j].

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [3, 2, 3, 2, 2]
// Output
// 4
// Explanation
// We have index pairs (0, 2), (1, 3), (1, 4), (3, 4).




class Solution {
    solve(nums) {
        let freq = {}
        for(let i of nums){
            freq[i] = (freq[i] || 0) +1
        }
        
        let count = 0
        for(let i in freq){
            let sum = 0
            let numCount = freq[i] -1
            while(numCount > 0){
                sum += numCount
                numCount--
            }
            count += sum
        }
        return count
    }
}

let nums = [3, 2, 3, 2, 2]
let aa = new Solution
console.log(aa.solve(nums))