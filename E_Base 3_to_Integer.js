// Given a string s representing a number in base 3 (consisting only of 0, 1, or 2),
//  return its decimal integer equivalent. This should be implemented directly 
//  without using a built-in function.

// Example 1
// Input
// s = "10"
// Output
// 3
// Example 2
// Input
// s = "21"
// Output
// 7


class Solution {
    solve(s) {
        let sum = 0
        for(let i = s.length -1; i >= 0; i--){
            if(Number(s[i]) !== 0){
                let position = s.length -1 - i
                sum += Number(s[i]) * (3 ** position)
            }
        }
        return sum
    }
}

let s = "121"
let aa = new Solution
console.log(aa.solve(s))


// class Solution {
//     solve(s) {
//         return parseInt(s, 3)
//     }
// }