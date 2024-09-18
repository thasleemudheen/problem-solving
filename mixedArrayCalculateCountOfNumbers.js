const mixedArray= [42, 'apple', 17, 'banana', 23, 'cherry', 8, 'date']

function calculateCountFromMixArray(array){
    let newArr=[]
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number'){
            newArr.push(array[i])
        }
    }
    const sum=newArr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return sum
}
console.log(calculateCountFromMixArray(mixedArray))