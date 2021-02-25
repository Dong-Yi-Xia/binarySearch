// Finding Binary Search in a String
// Given a lowercase alphabet string s, return whether it's possible to pick some subsequence of characters in s such that:

// The difference of any two successive indexes of the characters is equal
// The characters form the string "binarysearch"
// Constraints

// 1 ≤ n ≤ 1,000 where n is the length of s.
// Example 1
// Input
// s = "bziznzazrzyzszezazrzczh"
// Output
// true
// Explanation
// "binarysearch" exists in the indices [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22], and the desired difference is equal to 2.

// Example 2
// Input
// s = "binaryzsearch"
// Output
// false
// Explanation
// "binarysearch" exists in the indices [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11], but this does not satisfy the given conditions.


class Solution {
    solve(s) {
        let search = "binarysearch"
        let bIndex = []
        let iIndex = []
        s.split('').forEach((v,i,a) => {
            if(v === "b") bIndex.push(i) 
            if(v === "i") iIndex.push(i) 
        }) 
    
        for(let i = 0; i < bIndex.length; i++){
            let charB = bIndex[i]
            for(let j=0; j < iIndex.length; j++){
                let charI = iIndex[j]
                let distance = (charI - charB)
                if(distance > 0){
                    let word = ''
                    for (let i = charB; i<s.length; i += distance){
                        word += s[i]
                        if(word === search) return true
                    }  
                }
            }
        }
        return false
    }
}

let s = "bziznzazrzyzszezazrzczh"
let aa = new Solution
console.log(aa.solve(s))