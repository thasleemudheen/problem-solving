
// function rotateArr(array,k){
//     const size=array.length
//     k=k%size
//     const rotatedPart=array.splice(-k)
//     array.unshift(...rotatedPart)
//     return array
// }

// console.log(rotateArr(array,k))

const array=[1,2,3,4,5,6,7,8,9]
let k=4;
function rotateArr(array,k){
    const size=array.length
    if(size<k){
        k=k%size
    }
    reverse(array,0,array.length-1)
    reverse(array,0,k-1)
    reverse(array,k,array.length-1)
    return array
}

function reverse(array,left,right){
    while (left<right) {
        let temp=array[left]
        array[left]=array[right]
        array[right]=temp
        left++;
        right--;
    }
    return array
}
console.log(rotateArr(array,k))