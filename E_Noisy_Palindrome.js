// Noisy Palindrome
// You are given a string s containing lowercase and uppercase alphabet characters 
// as well as digits from "0" to "9". Return whether s is a palindrome if we only consider 
// the lowercase alphabet characters.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "a92bcbXa"
// Output
// true
// Explanation
// If we only consider the lowercase characters, then s is "abcba" which is a palindrome.

// Example 2
// Input
// s = "abZ"
// Output
// false


class Solution {
    solve(s) {
        let arrS = []
        for(let i of s){
            arrS.push(i.charCodeAt(0) )
        }
        // "a"97 - "z"122
        arrS = arrS.filter(n => 97<=n && n<=122)
        let lowerStr = String.fromCharCode(...arrS)
        // let reversed = lowerStr.split("").reverse().join("")
        // return lowerStr === reversed

        //find the halfway point, round up when odd, 
        //to include the halfway point number
        for(let i=0; i<Math.ceil(lowerStr.length/2); i++){
            let first = lowerStr[i]
            let last = lowerStr[lowerStr.length-1-i]
            if(first !== last) return false
        }
        return true
    }
}