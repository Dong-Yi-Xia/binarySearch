// You are given a lowercase alphabet string s, and an offset integer k. 
// Replace every letter in s with a letter k positions further along the alphabet.

// Note: If the letter overflows past a or z, it gets wrapped around the other side.

// Example 1
// Input
// s = "abc"
// k = 2
// Output
// "cde"
// Explanation
// "abc" gets moved 2 positions to the right.

// Example 2
// Input
// s = "aaa"
// k = -1
// Output
// "zzz"
// Example 3
// Input
// s = "zzz"
// k = 1
// Output
// "aaa"
// Explanation
// The "z" gets wrapped to "a"


// class Solution {
//     solve(s, k) {
//         let alp = "abcdefghijklmnopqrstuvwxyz"
//         let str = ""
//         for(let i=0; i<s.length; i++){
//             let cur = s[i]
            
//             let moveIndex = alp.indexOf(cur) + k
//             while(Math.abs(moveIndex) > alp.length-1){
//                 moveIndex = moveIndex % alp.length
//             }
//             if(moveIndex < 0){
//                 moveIndex += alp.length
//             }
//             str += alp[moveIndex]
//         }
//         return str
//     }
// }


//        //when we get to the end of the array, we want to loop back to the beginning.
//        //max rotation before it repeat again its the alphabet length
//        //max k can be is 25. || 0%26 = 0 || 3%26 = 3 || 25%26 = 25 || 26%26 = 0
class Solution {
    solve(s, k) {
        let alp = "abcdefghijklmnopqrstuvwxyz"
        let str = ""
        k = k % 26  

        for(let i=0; i<s.length; i++){
            let curLetter = s[i]
            let moveIndex = alp.indexOf(curLetter) + k   
            if(moveIndex > 25){
                moveIndex -= 26
            }else if(moveIndex < 0){
                moveIndex += 26
            } 
            str += alp[moveIndex]
        }
        return str
    }
}

class Solution {
    solve(s, k) {
        //when we get to the end of the array, we want to loop back to the beginning.
        //max rotation before it repeat again its the alphabet length
        //max k can be is 25. || 0%26 = 0 || 3%26 = 3 || 25%26 = 25 || 26%26 = 0
        k = k % 26
        s = s.split('')
        s = s.map(c => c.charCodeAt(0) + k)
        //'a' => 97 'z' =>122
        for(let i=0; i<s.length; i++){
            if(s[i] > 122){
                s[i] = s[i] - 26 
            } else if(s[i] < 97){
                s[i] = s[i] + 26 
            }
        }
        s = s.map(x => String.fromCharCode(x)).join("")
        return s
    }
}



class Solution {
    solve(s, k) { 
        k = k % 26
        let word = ""
        for(let i=0; i<s.length; i++){
            let num = s[i].charCodeAt(0) + k
            if(num > 122){
                num -= 26 
                word += String.fromCharCode(num)
            } else if(num < 97){
                num += 26 
                word +=String.fromCharCode(num)
            } else{
                word +=String.fromCharCode(num)
            }
        }
        return word
    }
}



class Solution {
    solve(s, k) {
        return s.split('')
            .map(c => c.charCodeAt(0) + k % 26)
            .map(x => x > 122 ? x - 26 : x)
            .map(x => x < 97 ? x + 26 : x)
            .map(x => String.fromCharCode(x))
            .join("");
    }
}



let s = "bcd"
let k = 2

let aa = new Solution
console.log(solve(s,k))



// let a = [0,1,2,3]
// 1,2,3,0
// 2,3,0,1
// 3,0,1,2

// console.log( 3 % 4)
// // max is 3 rotation before it repeats