// Longest Alliteration
// Given a list of lowercase alphabet strings words, return the length of the longest
//  contiguous sublist where all words share the same first letter.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of words
// Example 1
// Input
// words = ["she", "sells", "seashells", "he", "sells", "clams"]
// Output
// 3
// Explanation
// ["she", "sells", "seashells"] all share the first letter s.


class Solution {
    solve(words) {
        let max = 0
        for(let i=0; i<words.length; i++){
            let count = 0   
            //while next exist and 1st char of (cur === next) 
            while(words[i+1] && words[i][0] === words[i+1][0]){
                count++
                i++
            }
            //include the last cur, or just a cur !== next
            count++
            max = Math.max(max, count)
        } 
        return max
    }
}