// You’re given a string s containing letters of three types, R, B, and ..

// R represents your current position, B represents a blocked position, and . represents 
// an empty position. In one step, you can move to any adjacent position to your current 
// position, as long as it is empty. Can you reach either the leftmost position or the 
// rightmost position?

// Return true if you can reach either the leftmost or the rightmost position, 
// or false if you cannot.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "......B....R.............."
// Output
// true
// Explanation
// We can reach the rightmost position since it's not blocked.

// Example 2
// Input
// s = "B...B...R........BBBB"
// Output
// false
// Explanation
// We can't reach either side since they're both blocked.


class Solution {
    solve(s) {
        let b = s.replace(/[.]/g,"")
        let ind = b.indexOf("R")
        if(b[ind-1] === "B" && b[ind+1]  === "B"){
            return false 
        }
        return true
    }
}

let a = new Solution
let s = "......B....R.............."
console.log(a.solve(s))