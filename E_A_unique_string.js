// Given a lowercase alphabet string s, determine whether it has all unique characters.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "abcde"
// Output
// true
// Explanation
// All characters only occur once

// Example 2
// Input
// s = "aab"
// Output
// false
// Explanation
// There's two as

// Example 3
// Input
// s = ""
// Output
// true
// Explanation
// All characters occur once (of which there are none)

class Solution {
    solve(s) {
        for(let i=0; i<s.length; i++){
            if(s.indexOf(s[i]) !== s.lastIndexOf(s[i]) ){
                return false
            }
        }
        return true
    }
}

const s = "abcdef"

const aa = new Solution
console.log(aa.solve(s))