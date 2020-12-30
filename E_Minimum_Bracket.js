// Given a string s containing brackets ( and ), return the minimum number of 
// brackets that can be inserted so that the brackets are balanced.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = ")))(("
// Output
// 5
// Explanation
// We can insert ((( to the front and )) to the end

// Example 2
// Input
// let s = "(()))(("
// Output
// 3
// The last 3 needs a ()). 

// Needs to be a pair in (). Not )(

let s = "(()))(("

class Solution {
    solve(s) {
        let counter = []
        for(let i=0; i<s.length; i++){
            let cur = s[i] 
            let next = s[i+1] 
            if(cur + next === "()"){
                i++
            }else if(counter[counter.length-1] + cur === "()"){
                counter.pop()
            }else{
                counter.push(cur)
            }
        }
        return counter.length
    }
}

const a = new Solution
console.log(a.solve(s))