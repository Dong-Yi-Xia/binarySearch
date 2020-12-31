// s = "05:30pm"
// Output
// "17:30"

// s = "03:00am"
// Output
// "03:00"

let c = s.split(":").map(n => n.replace(/[a-zA-z]/g,""))

let hour = c[0]
let min = c[1]

if(hour === "12"){
    hour = "00"
}

if(s.includes("pm")){
    
   let timePM = parseInt(hour) + 12
   console.log(`${String(timePM)}:${min}`)
}else{
   console.log(`${hour}:${min}`)
}





Matrix Prefix Sum
for(let row = 0; row < matrix.length; row++){
    let rowTotal = 0;

    for(let col = 0; col < matrix[row].length; col++){
        rowTotal += matrix[row][col];

        if(row === 0){
        matrix[row][col] = rowTotal;
        } else{
        matrix[row][col] = rowTotal + matrix[row-1][col]
        }
    }
}
return matrix

    // s = "()())))"

    // let curveMap = {
    //     "(" : ")",
    //     ")" : "("
    // }

    // s = s.split("")
    // let counter = []
    // for(let i=0; i<s.length; i++){
    //     let cur = s[i] // (
    //     let next = s[s+1] // )
    //     if(curveMap[cur] === next){
    //     i++   
    //     } else if(curveMap[cur] === counter[counter.length-1]){
    //     counter.pop()        
    //     } else {
    //         counter.push(cur)
    //     }
    // }
    // return counter.length
    
  




    
    // let s = "......B....R.............B"
    // let b = s.replace(/[.]/g, "")
    // let ind = b.indexOf("R")
    // if(b[ind-1] === "B" && b[ind+1]  === "B") return false
    // return true