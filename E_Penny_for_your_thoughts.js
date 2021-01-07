// Penny for Your Thoughts
// Question 337 of 1000
// Given a positive integer n representing the amount of cents you have, 
// return the formatted currency amount. For example, given n = 123456, return "1,234.56".

// Example 1
// Input
// n = 132
// Output
// "1.32"
// Example 2
// Input
// n = 2
// Output
// "0.02"
// Example 3
// Input
// n = 100000000
// Output
// "1,000,000.00"


class Solution {
    solve(n) {
        let divided = (n /100).toFixed(2)
        let strDec = String(divided)

        let integer = parseInt(strDec.split(".")[0])
        let dec = strDec.split(".")[1]

        let strInteger = integer.toLocaleString('en')
       
        if(dec === undefined){
            return `${strInteger}.00` 
        } else{
            return`${strInteger}.${dec}` 
        }
    }
}


class Solution {
    solve(n) {
        return (n / 100).toLocaleString(undefined, {
            minimumFractionDigits: 2
        });
    }
}

let n = 541230

let pp = new Solution
console.log(pp.solve(n))



//using toLocaleString 
let number = 1234.567
console.log(
  number.toLocaleString(undefined, { 
    style: "currency", 
    currency: "USD", 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2
  })
);
// //$1,234.57