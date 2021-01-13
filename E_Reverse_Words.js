// Given a string s of words delimited by spaces, reverse the order of words.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// sentence = "hello there my friend"
// Output
// "friend my there hello"



class Solution {
    solve(sentence) {
        sentence = sentence.split(" ")
        let indFirst = 0
        let indLast = sentence.length-1
        while(indFirst < indLast){
            let temp = sentence[indFirst]
            sentence[indFirst] = sentence[indLast]
            sentence[indLast] = temp
            indFirst++
            indLast--
        }
        return sentence.join(" ")
    }
}


const sentence = "hello there my friend"

const aa = new Solution
console.log(aa.solve(sentence))