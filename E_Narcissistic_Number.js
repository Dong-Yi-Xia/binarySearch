// Narcissistic Number
// Given an integer n, return whether it is equal to the sum of its own digits
// raised to the power of the number of digits.

// Example 1
// Input
// n = 153
// Output
// true
// Explanation
// 153 = 1 ** 3 + 5 ** 3 + 3 ** 3

class Solution {
    solve(n) {
        let strNumArr = n.toString()
        let power = strNumArr.length
        let sum = 0
        for(let i of strNumArr){
            sum += i**power
        }
        return sum === n
    }
}