const array=[1,2,4,3,2,12,3,3,2,35,6,3,5,1,2,9]
function removeDuplicatedFromSortedArr(array){
    const sortedArr=array.sort((a,b)=>a-b)
    // console.log(sortedArr)
    for(let i=0;i<sortedArr.length;i++){
        if(sortedArr[i]===sortedArr[i+1]){
            sortedArr.splice(i+1,1)
            i--
        }
    }
    return array
}
console.log(removeDuplicatedFromSortedArr(array))
