function sortingNumber(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<=array.length;j++){
            if(array[i]>array[j]){
                let temp=array[i]
                array[i]=array[j]
                 array[j]=temp
            }
        }
    }
    return array  
}
console.log(sortingNumber([1,3,2,6,8,1,10,1,2,1]))