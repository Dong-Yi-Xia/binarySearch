// Given two sorted lists of integers, merge them into one large sorted list.

// Example 1
// Input
// lst0 = [5, 10, 15]
// lst1 = [3, 8, 9]
// Output
// [3, 5, 8, 9, 10, 15]


class Solution {
    solve(lst0, lst1) {
        let combine = []
        combine.push(...lst0)
        combine.push(...lst1)
        return combine.sort((a,b)=> a-b)
    }
}

const lst0 = [5, 10, 15]
const lst1 = [3, 8, 9]

const aa = new Solution
console.log(aa.solve(lst0, lst1))