// Toeplitz Matrix
// Given a two-dimensional matrix of integers matrix, determine whether it's a Toeplitz matrix.
//  A Toeplitz is one where every diagonal descending from left to right has the same value.

// Constraints

// n, m ≤ 250 where n and m are the number of rows and columns in matrix
// Example 1
// Input
// matrix = [
//     [0, 1, 2],
//     [3, 0, 1],
//     [4, 3, 0],
//     [5, 4, 3]
// ]
// Output
// true

// Example 2
// Input
// matrix = [
//     [1, 0, 0],
//     [0, 0, 0],
//     [0, 0, 1]
// ]
// Output
// false

class Solution {
    solve(matrix) {
        for(let i=0; i<matrix.length-1; i++){
            let cur = matrix[i]
            let next = matrix[i+1]
            for(let j=0; j<cur.length-1; j++){
                for(let k=j+1; k<next.length; k++){
                    if(cur[j] === next[k]){
                        break
                    }
                    if(cur[j] !== next[k]){
                        return false
                    }
                }
            }
        }
        return true
    }
}

