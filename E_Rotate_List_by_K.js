// Write a function that rotates a list of numbers to the left by k elements. 
// Numbers should wrap around.

// Note: The list is guaranteed to have at least one element, and
//  k is guaranteed to be less than or equal to the length of the list.

// Bonus: Do this without creating a copy of the list. How many swap or move operations do you need?

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 2, 3, 4, 5, 6]
// k = 2
// Output
// [3, 4, 5, 6, 1, 2]
// Example 2
// Input
// nums = [1, 2, 3, 4, 5, 6]
// k = 6
// Output
// [1, 2, 3, 4, 5, 6]
// Example 3
// Input
// nums = [1]
// k = 0
// Output
// [1]



// class Solution {
//     solve(nums, k) {
//         let newArr = nums.slice()
//         let reduced = k % newArr.length
//         if(k === 0 ) return newArr

//         if(reduced > newArr.length/2){
//             let negk = newArr.length - reduced
//             let count = 0
//             while(count < negk){
//                 let negRemoved = newArr.pop()
//                 newArr.unshift(negRemoved)
//                 count++
//             }  
//             return newArr
//         }

//         let count = 0
//         while(count < reduced){
//             let removed = newArr.shift()
//             newArr.push(removed)
//             count++
//         }
//         return newArr
//     }
// }


// class Solution {
//     solve(nums, k) {
//         let newArr = nums.slice()
//         k = k % newArr.length
//         if(k === 0 ) return newArr

//             // if k is greater than half of the length, start from the end
//         if(k > newArr.length/2){
//             let negk = newArr.length - k
//             //splice from the neg index
//             let r = newArr.splice(-negk)
//             newArr.unshift(...r)
//             return newArr
//         }

//         let r = newArr.splice(0,k)
//         newArr.push(...r)
//         return newArr
//     }
// }



class Solution {
    solve(nums, k) {
        k = k % newArr.length
        let r = nums.splice(k)
        nums.splice(0, 0, ...r)
        return nums
    }
}


let nums = [1,2,3,4,5,6]
let k = 2


let pp = new Solution
console.log(pp.solve(nums, k ))