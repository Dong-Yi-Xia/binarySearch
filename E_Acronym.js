// Given a string s representing a phrase, return its acronym. 
// Acronyms should be capitalized and should not include the word "and".

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "For your information"
// Output
// "FYI"
// Example 2
// Input
// s = "National Aeronautics and Space Administration"
// Output
// "NASA"


class Solution {
    solve(s) {
        s = s.toUpperCase().split(" ").filter(n => n !== 'AND')
        let word = ""
        s.forEach(n => word += n[0])
        return word
    }
}

const s = "National Aeronautics and Space Administration" 
const aa = new Solution
console.log(aa.solve(s))