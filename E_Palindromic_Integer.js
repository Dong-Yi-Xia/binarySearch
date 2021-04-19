// Palindromic Integer
// Given a non-negative integer num, return whether it is a palindrome.

// Bonus: Can you solve it without using strings?

// Constraints

// num < 2 ** 31
// Example 1
// Input
// num = 121
// Output
// true

// Example 2
// Input
// num = 20200202
// Output
// true

// Example 3
// Input
// num = 43
// Output
// false


class Solution {
    solve(num) {
        num = num.toString()
        for(let i=0; i<num.length; i++){
            if(num[i] !== num[num.length-i-1]) return false
        }
        return true
    }
}


class Solution {
    solve(num) {
        let x = num 
        let reverse = 0
        while(x !== 0){
            reverse = (reverse * 10) + (x % 10)
            x = Math.floor(x / 10)
        }
       return reverse === num
    }
}