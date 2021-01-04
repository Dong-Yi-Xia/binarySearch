// Given a positive integer num, return the sum of its digits.

// Bonus: Can you do it without using strings?

// Constraints

// 0 ≤ num < 2 ** 31
// Example 1
// Input
// num = 123
// Output
// 6
// Explanation
// Since 6 = 1 + 2 + 3

// Example 2
// Input
// num = 50
// Output
// 5
// Explanation
// Since 5 = 5 + 0


const num = 123

class Solution {
    solve(num) {
        let sum = 0
        while(num !== 0){
            let last = num % 10
            let rest = parseInt(num/10)
            sum += last
            num = rest
        }
        return sum
       
    }
}

const a = new Solution
console.log(a.solve(num))

