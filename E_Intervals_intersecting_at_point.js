// You are given a two-dimensional list of integers intervals and an integer point. 
// Each element contains [start, end] represents an inclusive interval.

// Return the number of intervals that are intersecting at point.

// Constraints

// n ≤ 100,000 where n is the length of intervals
// Example 1
// Input
// intervals = [
//     [1, 5],
//     [3, 9],
//     [4, 8],
//     [10, 13]
// ]
// point = 4
// Output
// 3
// Explanation
// At time 4, there are 3 intervals that are intersecting: [1, 5], [3, 9], [4, 8]

class Solution {
    solve(intervals, point) {
        let cross = []
        for(let i=0; i<intervals.length; i++){
            let start = intervals[i][0]
            let end = intervals[i][1]
            if(start <= point && point <= end){
                cross.push(true)
            } 
        }
        return cross.length
    }
}

const intervals = [
        [1, 5],
        [3, 9],
        [4, 8],
        [10, 13]
    ]
const point = 4

const aa = new Solution
console.log(aa.solve(intervals,point))