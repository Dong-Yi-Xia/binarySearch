// Given a list of strings shows, a list of integers durations, and an integer k, 
// where shows[i] and durations[i] represent the name and duration watched by the 
// ith person, return the total duration watched of the k most watched shows.

// Example 1
// Input
// shows = ["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"]
// durations = [5, 3, 5, 13, 4]
// k = 2
// Output
// 23
// Explanation
// The top 2 most watched movies are "Roma" and "Top Gun" for total durations of 13 and 10 = 5+ 5.



const shows = ["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"]
const durations = [5, 3, 5, 13, 4]
const k = 2

class Solution {
    solve(shows, durations, k) {
        let list = new Map() 
        for(let i=0; i<shows.length; i++){
            let name = shows[i]
            for(let j=i; j<durations.length; j++){
                let hour = durations[j]
                if(list.has(name) ){
                    let totalHour = list.get(name) + hour
                    list.set(name, totalHour)
                    break
                }else{
                    list.set(name, hour)
                    break
                }
            }
        }

        let s =[...list.values()].sort((a,b) => b-a).slice(0,k).reduce((a,v) => a+v, 0)
        return s
    }
}



const a = new Solution
console.log(a.solve(shows, durations, k))