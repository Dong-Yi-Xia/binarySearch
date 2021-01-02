




// class Solution {
//     solve(n) {

//         let count = 0
//         let size = String(n).length
//         let arr = []

//         while(count < size){
//             for(let i=2; i<Math.sqrt(n); i++){
//                 if(n % i === 0){
//                     return false
//                 } 
//                 //1 is not prime
//                 arr.push(n > 1)
//             }

//             let strN = String(n)
//             let last = n%10
//             let rotateN = last+strN.slice(0,-1)
//             n = parseInt(rotateN)
//             count++
//         }
//         return !arr.includes(false)

//          }
//     }

let n = 919

class Solution {
    solve(n) {

        let count = 0
        let size = String(n).length
        let arr = []

        while(count < size){
            for(let i=2; i<Math.sqrt(n); i++){
                if(n % i === 0){
                    return false
                } 
                //1 is not prime
                else if(n > 1){
                    continue
                }
            }

            let strN = String(n)
            let last = n%10
            let rotateN = last+strN.slice(0,-1)
            n = parseInt(rotateN)
            count++
        }
        return true
    }   
}

const b = new Solution
console.log(b.solve(n))







Minimum Initial Value for Positive Prefix Sums

class Solution {
    solve(nums) {

        let min = 0 //store min prefix sum
        let sum = 0 
        for(let i=0; i<nums.length; i++){
            let num = nums[i]
            sum += num
            min = Math.min(min, sum)
        }
        return 1-min // 1 minus a neg num equals a positive 
    }
}