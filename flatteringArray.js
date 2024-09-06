let inputArr=[1, [2, [3, 4], 5], 6]


// let newArr=inputArr.flat(Infinity)
// console.log(newArr)



function flatArr(array){
    let newArr=[]
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number'){
            newArr.push(array[i])
        }else if(Array.isArray(array[i])){
            newArr=newArr.concat(flatArr(array[i]))
        }
    }
    return newArr
}

console.log(flatArr(inputArr))