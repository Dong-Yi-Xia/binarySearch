// Target Number with Operations
// Given positive integers start and end (start < end), return the minimum number of 
// operations needed to convert start to end using these operations:

// Increment by 1
// Multiply by 2
// Constraints

// start < end < 2 ** 31
// Example 1
// Input
// start = 2
// end = 9
// Output
// 3
// Explanation
// We can multiply 2 to get 4, and then again to get 8, then add 1 to get 9.


class Solution {
    solve(start, end) {
        let count = 0
        while (end / 2 >= start) {
            count++
            if (end % 2 === 0) {
                end /= 2
            } else {
                end--
            }
        }
        return count + end - start
    }
}

let start = 2
let end = 9
const aa = new Solution
console.log(aa.solve(start, end))