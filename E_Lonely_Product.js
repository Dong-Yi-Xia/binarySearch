// Given three numbers, a, b, and c, return their product, but if any two numbers
//  are the same, they do not count.

// Example 1
// Input
// a = 2
// b = 3
// c = 4
// Output
// 24
// Explanation
// All three numbers are unique so their product is 2 * 3 * 4 = 24

// Example 2
// Input
// a = 3
// b = 3
// c = 5
// Output
// 5
// Explanation
// There's two 3s so the product is 5

// Example 3
// Input
// a = 3
// b = 3
// c = 3
// Output
// 1
// Explanation
// All three numbers are the same, so they don't count toward the product.

const [a,b,c] = [2,3,4]

class Solution {
    solve(a, b, c) {     
        let arr = [a,b,c]
        let occurOnce = arr.filter((v,i,a) => {
            return a.indexOf(v) === i && a.lastIndexOf(v) === i
        })
        let product = occurOnce.reduce((a,v) => a*v, 1)
        return product
    }
}

const z = new Solution
console.log(z.solve(a,b,c))




class Solution {
    solve(a, b, c) {
        let product = 1
        if(a !== b && a !== c){
            product *= a
        }
        if(b !== a && b !== c){
            product *= b
        }
        if(c !== a && c !== b){
            product *= c
        }
        return product 
    }
}