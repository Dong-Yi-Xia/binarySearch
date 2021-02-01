// The last opening face must be closed out first.arr


let arr"{[({{[]})]}"  //true
let arr = "{(){}{]}"   //false

function balance(arr){
    let hashMap = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    let openArr = []
    //stack all the open face in a new array.
    for(let i=0; i<arr.length; i++){
        let current = arr[i]
        if("{[(".includes(current)){
            openArr.push(current)
        }else if(openArr.pop() !== hashMap[current]){
            //compare the last to the close face, if doesn't match its false
            return false
        }
    }

    return openArr.length === 0
}


console.log(balance(arr))