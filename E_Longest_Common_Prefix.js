// Given a list of lowercase alphabet strings words, return the longest common prefix.

// Example 1
// Input
// words = ["anthony", "ant", "antigravity"]
// Output
// "ant"
// Explanation
// "ant" is the longest common prefix between the three strings.



const words = ["anthony", "ant", "antigravity"]


class Solution {
    solve(words) {

        let sorted = words.sort((a,b) => a.length-b.length)
        let baseWord = sorted[0]
        let prefix = ""
        for(let i=0; i<baseWord.length; i++){
            let letter = baseWord[i]
            for(let j=0; j<words.length; j++){
                let checkLetter = words[j][i]
                if(j === words.length-1 && letter === checkLetter){
                    prefix+=letter
                }else if(letter === checkLetter){
                    continue
                }else{
                    break
                } 
            }
            if(prefix.length === i){
                break
            }
        }
        return prefix
    }
}


const a = new Solution
console.log(a.solve(words))



// solve(words) {
//     let str = ''
//     let letter = ''
//     for (let i = 0; i < words[0].length; i++) {
//         letter = words[0][i]
//         for (let j = 0; j < words.length; j++) {
//             if (words[j][i] !== letter) {
//                 return str
//             }
//         }
//         str += letter
//     }
// }