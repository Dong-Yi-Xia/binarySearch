// FizzBuzz
// Given an integer n, return a list of integers from 1 to n as 
// strings except for multiples of 3 use “Fizz” instead of the integer 
// and for the multiples of 5 use “Buzz”. For integers which are 
// multiples of both 3 and 5 use “FizzBuzz”.

// Constraints

// 0 ≤ n ≤ 100,000
// Example 1
// Input
// n = 15
// Output
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

class Solution {
    solve(n) {
        let result = []
        let i = 1
        while(i <= n){
            if(i%3 === 0 && i%5 === 0)result.push("FizzBuzz")
            else if(i%3 === 0)result.push("Fizz")
            else if(i%5 === 0)result.push("Buzz")
            else result.push(`${i}`)
            i++
        }
        return result
    }
}