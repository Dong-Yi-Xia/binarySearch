// Given a string s, return whether it is a palindrome.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "racecar"
// Output
// true
// Example 2
// Input
// s = "evilolive"
// Output
// true
// Example 3
// Input
// s = "palindrome"
// Output
// false


class Solution {
    solve(s) {
        s = s.split("")
        while(s.length > 1){
            if(s[0] !== s[s.length-1]){
                return false
            }
            s = s.slice(1,-1)
        }
        return true
    }
}

const s = "racecar"
// const s = "book"

let aa = new Solution
console.log(aa.solve(s))