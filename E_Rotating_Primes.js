// Given an integer n, return whether every rotation of n is prime.

// Example 1
// Input
// n = 199
// Output
// true
// Explanation
// 199 is prime, 919 is prime, and 991 is prime.

// Example 2
// Input
// n = 19
// Output
// false
// Explanation
// Although 19 is prime, 91 is not.


const n = 199

class Solution {
    solve(n) {

        let count = 0
        let size = String(n).length
     
        // 1 is Not a prime number
        if(n === 1) return false

        while(count < size && n > 1){
            for(let i=2; i<Math.sqrt(n); i++){
                if(n % i === 0){
                    return false
                } 
            }

            let strN = String(n)
            let last = n%10
            let rotateN = last+strN.slice(0,-1)
            n = parseInt(rotateN)
            count++
        }
        return true
    }
}


const a = new Solution
console.log(a.solve(n))