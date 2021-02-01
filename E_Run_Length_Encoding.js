// Given a string s, return its run-length encoding. You can assume the string to be 
// encoded have no digits and consists solely of alphabetic characters.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "aaaabbbccdaa"
// Output
// "4a3b2c1d2a"
// Example 2
// Input
// s = "abcde"
// Output
// "1a1b1c1d1e"
// Example 3
// Input
// s = "aabba"
// Output
// "2a2b1a"
// Example 4
// Input
// s = "aaaaaaaaaa"
// Output
// "10a"



class Solution {
    solve(s) {
        let word = ""
        let i = 0
        while(i < s.length){
            let count = 0
            let slow = s[i]
            let fast = s[i]
            while(slow === fast){
                count++
                fast = s[i+1]
                i++
            }
            if(slow !== fast){
                word = word + count + slow
            }
        }
        return word
    }
}

let s = "aaaabbbccdaa"
let aa = new Solution
console.log(aa.solve(s))