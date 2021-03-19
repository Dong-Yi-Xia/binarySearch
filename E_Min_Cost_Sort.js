// Minimum Cost Sort
// Given a list of integers nums, return the minimum cost of sorting the list in 
// ascending or descending order. The cost is defined as the sum of absolute differences 
// between any element's old and new value.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 4, 3]
// Output
// 2
// Explanation
// The cost to change the list to ascending order is 2:

// Change 4 to 3 for a cost of 1
// Change 3 to 4 for a cost of 1

// Example 2
// Input
// nums = [7, 3, 5]
// Output
// 4
// Explanation
// The cost to change the list to descending order is 4:

// Change 3 to 5 for a cost of 2
// Change 5 to 3 for a cost of 2

class Solution {
    solve(nums) {

        let asc = nums.slice().sort((a,b) => a-b)
        let desc = nums.slice().sort((a,b) => b-a)

        let a = total(nums, asc)
        let b = total(nums, desc)

        return a < b ? a : b
    
    }
}



function total (ori, sorted){
     let a = 0
     for(let i=0; i<sorted.length; i++){
         a += Math.abs(sorted[i] - ori[i])   
     }
     return a
}