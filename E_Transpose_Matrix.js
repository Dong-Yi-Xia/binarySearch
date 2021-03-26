// Transpose of a Matrix
// Given an integer square (n by n) matrix, return its transpose. A transpose of a 
// matrix switches the row and column indices. That is, for every r and c, 
// matrix[r][c] = matrix[c][r].

// Constraints

// n ≤ 100
// Example 1
// Input
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Output
// [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]


class Solution {
    solve(matrix) {
        let mat = []
        for(let i in matrix){
            mat.push([])
            for(let j in matrix){
                mat[i].push(matrix[j][i])
            }
        }
       return mat
    }
}