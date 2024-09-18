const array=[1,2,3,4,5,6,7,8,9]
let k=4;
function rotateArr(array,k){
    const size=array.length
    k=k%size
    const rotatedPart=array.splice(-k)
    array.unshift(...rotatedPart)
    return array
}

console.log(rotateArr(array,k))