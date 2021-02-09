// Given a string of parentheses s, return the minimum number of parentheses to be 
// removed to make the string balanced.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "()())()"
// Output
// 1
// Explanation
// We can remove the ")" at index 4 to make it balanced.

// Example 2
// Input
// s = ")("
// Output
// 2
// Explanation
// We must remove all the parentheses.


class Solution {
    solve(s) {
        let leftStack = []
        let extra = []
        for (let i=0; i<s.length; i++){
            if(s[i] === "("){
                leftStack.push(s[i])
            }else{
                if(leftStack.length > 0){
                    leftStack.pop()
                }else{
                    extra.push(s[i])
                }
            }
        }
        return extra.length + leftStack.length
    }
}


