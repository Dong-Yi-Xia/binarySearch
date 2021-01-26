// Given a positive integer n, sum all of its digits to get a new number. 
// Repeat this operation until it's less than 10.

// Constraints

// 1 ≤ n < 2 ** 31
// Example 1
// Input
// n = 8835
// Output
// 6
// Explanation
// 8 + 8 + 3 + 5 = 24
// 2 + 4 = 6


class Solution {
    solve(n) {
        while(n > 9){
            n = n.toString().split("").map(n=>Number(n)).reduce((a,v)=> a+v)
        }
        return n
    }
}


class Solution {
    solve(n) {
        while(n > 9){
            let sum = 0
            n.toString().split("").forEach(n => sum += Number(n))
            n = sum
        }
        return n
    }
}


class Solution {
    solve(n) {
        let sum = 0
        while(n){
            sum += n % 10
            n = parseInt(n/10)
        }
        if(sum < 10){
            return sum
        }
        return this.solve(sum)
    }
}