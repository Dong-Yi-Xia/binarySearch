// Given an integer n, we apply this transformation until it becomes a 1: 
// take each of the digits in n, square it, and then take their sum.

// Return whether n will end up in 1 after the transformations.

// Example 1
// Input
// n = 7
// Output
// true
// Explanation
// This is a happy number since we get this sequence [49, 97, 130, 10, 1]

// 7 ** 2 = 49
// 4 ** 2 + 9 ** 2 = 97
// 9 ** 2 + 7 ** 2 = 130
// 1 ** 2 + 3 ** 2 + 0 ** 2 = 10
// 1 ** 2 + 0 ** 2 = 1
// Example 2
// Input
// n = 11
// Output
// false
// Explanation
// This is not a happy number since it ends up in a cycle: 
// [2, 4, 16, 37, 58, 89, 145, 42, 20, 4]

// 2 ** 2 = 4
// 4 ** 2 = 16
// 1 ** 2 + 6 ** 2 = 37
// 3 ** 2 + 7 ** 2 = 58
// 5 ** 2 + 8 ** 2 = 89
// 8 ** 2 + 9 ** 2 = 145
// 1 ** 2 + 4 ** 2 + 5 ** 2 = 42
// 4 ** 2 + 2 ** 2 = 20
// 2 ** 2 + 0 ** 2 = 4


class Solution {
    solve(n) {
        let value = []
        while(n !== 1){
            let strN = String(n)
            let sumN = strN.split("").map(v => v ** 2).reduce((a,v) => a+v,0)
            if(sumN === 1) return true
            else if(value.includes(sumN)){
                return false
            } else{
                value.push(sumN)
                n = sumN
            }
        }
    }
}

const n = 7
const aa = new Solution
console.log(aa.solve(n))



// class Solution {
//     solve(n) {
//         let visited = new Set();
//         let current = n;
//         while (!visited.has(current) && current != 1) {
//             visited.add(current);
//             let next = 0;
//             while (current > 0) {
//                 next = next + Math.pow(current % 10, 2)
//                 current = Math.floor(current / 10);
//             }
//             current = next;
//         }
//         return current == 1;
//     }
// }
