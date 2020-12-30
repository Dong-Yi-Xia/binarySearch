// Given a lowercase alphabet string s, remove all “y” and “xz” in the string in one iteration.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "xyxyxz"
// Output
// "xx"

// Example 2
// Input
// s = "xyz"
// Output
// "xz"
// Explanation
// Note only the "y" was removed.

class Solution {
    solve(s) {
        let word = ""

        for(let i=0; i<s.length; i++){
            let cur = s[i] 
            let next = s[i+1]
            if (cur === "y"){
                continue
            }else if (cur === "x" && next === "z"){
                i++
                continue
            } else {
                word += cur
            }
        }
         return word
    }
}


let a = new Solution

let s = "xyz"
console.log(a.solve(s))