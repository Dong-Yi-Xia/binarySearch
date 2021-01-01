Longest Common Prefix

let words = ["za", "zf", "zba"]
 
let common = []
for(let i=0; i<words.length; i++){
    let cur = words[i]
    let letter = cur[i]
    common.push(letter)
    for(let j=0; j<words.length; j++){
        let checkLetter = words[j][i]
        if(common[common.length-1] === letter){
            continue
        } else{
            break
        }
    }
     console.log(common)    



     let matrix = [
        [10, 20, 30],
        [5, 5, 3],
        [0, 10, 7]
    ]
    // Output
    // [
    //     [0, 5, 3],
    //     [5, 10, 7],
    //     [10, 20, 30]
    // ]
    
    
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
    
    console.log(matrix)
    