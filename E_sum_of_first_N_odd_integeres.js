// Given an integer n, return the sum of the first n positive odd integers.

// Constraints

// n ≤ 1,000
// Example 1
// Input
// n = 5
// Output
// 25
// Explanation
// The first 5 odd integers are [1, 3, 5, 7, 9] and its sum is 25.


// class Solution {
//     solve(n) {
//         let num = -1
//         let arr = []
//         while(arr.length < n){
//             num += 2
//             arr.push(num)
//         }
//         return arr.reduce((a,v)=> a+v,0)
//     }
// }


class Solution {
    solve(n) {
        return n ** 2
    }
}

const n = 8
// [1, 3, 5, 7, 9, 11, 13, 15] 
const aa = new Solution
console.log(aa.solve(n))