// Given a positive integer n, determine whether you can make n by summing up some 
// non-negative multiple of 3 and some non-negative multiple of 7.

// Constraints

// n < 2 ** 31
// Example 1
// Input
// n = 13
// Output
// true
// Explanation
// We can get 13 with 1 * 7 + 2 * 3.

// Example 2
// Input
// n = 9
// Output
// true
// Explanation
// We can get 9 with 3 3s.




class Solution {
    solve(n) {
        for (let i = 0; i <= n; i += 7) {
            if ((n - i) % 3 === 0) return true
        }
        return false
    }
}


let n = 12
let aa = new Solution
console.log(aa.solve(n))