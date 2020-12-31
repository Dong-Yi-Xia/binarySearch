// Given a two-dimensional integer matrix, return a new matrix A of the 
// same dimensions where each element is set to A[i][j] = sum(matrix[r][c]) 
// for all r ≤ i, c ≤ j.

// Constraints

// n, m ≤ 250 where n and m are the number of rows and columns in matrix
// matrix[i][j] ≤ 2**12


// input
let matrix = [
    [10, 20, 30],
    [5, 10, 20],
    [2, 4, 6]
]

// output
let Amatrix = [
    [10, 30, 60],
    [15, 45, 95],
    [17, 51, 107]
]

class Solution {
    solve(matrix) {
        for(let row = 0; row < matrix.length; row++){
            let curRowTotal = 0;

            for(let col = 0; col < matrix[row].length; col++){
                curRowTotal += matrix[row][col];

                if(row === 0){
                matrix[row][col] = curRowTotal;
                } else{
                        //currentRowTotal at col + the new mod. matrix sum upto prev row, at col
                matrix[row][col] = curRowTotal + matrix[row-1][col]
                }
            }
        }
    return matrix
    }
}

const a = new Solution
console.log(a.solve(matrix))