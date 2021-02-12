// Shortest Sublist With Max Frequency

// You are given a list of integers nums. Let k be the frequency of a most frequent 
// number in nums. Return the length of a shortest 
// sublist such that the frequency of its most frequent number is also k.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 2, 3, 4, 3, 1]
// Output
// 3
// Explanation
// The most frequent numbers are 1 and 3 and each of them occur twice, so k = 2. And 
// the sublist [3, 4, 3] is the shortest sublist such that the frequency of the most 
// frequent number is equal to k.

const nums = [1, 2, 3, 4, 3, 1]

class Solution {
    solve(nums) {
        let freq = frequent(nums)
        let max = maxCounter(freq)
        let shortestLength = Number.POSITIVE_INFINITY

        for(let key in freq){
            let first = nums.indexOf(parseInt(key))
            let last = nums.lastIndexOf(parseInt(key))
            let subNums = nums.slice(first,last+1)
            let subFreq = frequent(subNums)
            let submax = maxCounter(subFreq)
            if(submax === max){
                if(subNums.length < shortestLength){
                    shortestLength = subNums.length
                }
            }
        }

        return shortestLength
    }
}

function frequent(nums){
    let freq = {}
    for(let val of nums){
        freq[val] = (freq[val] || 0) + 1
    }
    return freq
}

function maxCounter(freq){
    let max = 0
    for(let key in freq){
        max = Math.max(max, freq[key])
    }
    return max
}

const aa = new Solution
console.log(aa.solve(nums))