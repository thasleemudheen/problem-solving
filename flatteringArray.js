let inputArr=[1, [2, [3, 4], 5], 6]


// let newArr=inputArr.flat(Infinity)
// console.log(newArr)



function flatArr(inputArr){
    let result=[]
    for(let i=0;i<inputArr.length;i++){
        if(typeof(inputArr[i])==='number'){
                 result.push(inputArr[i])
        }else if(Array.isArray(inputArr[i])) {
           result=result.concat(flatArr(inputArr[i]))
        }
        
    }    
    return result
}

console.log(flatArr(inputArr));
