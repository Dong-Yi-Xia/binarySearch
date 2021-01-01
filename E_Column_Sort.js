// Given a two-dimensional integer matrix, sort each of the columns in ascending order.

// Constraints

// n, m ≤ 250 where n and m are the number of rows and columns in matrix
// Example 1
// Input
// matrix = [
//     [10, 20, 30],
//     [5, 5, 3],
//     [0, 10, 7]
// ]
// Output
// [
//     [0, 5, 3],
//     [5, 10, 7],
//     [10, 20, 30]
// ]




const matrix = [
        [10, 20, 30],
        [5, 5, 3],
        [0, 10, 7]
     ]


class Solution {
    solve(matrix) {

        let count = matrix[0].length
        let col = 0
        while(col < count){
            let newCol = []
            for(let i=0; i<matrix.length; i++){
                newCol.push(matrix[i][col])
            }
            let sorted = newCol.sort((a,b) => a-b)
            for(let j=0; j<matrix.length; j++){
                matrix[j][col] = sorted[j]
            }
            col++
        }
        
        return matrix
    }
}

const a = new Solution
console.log(a.solve(matrix))