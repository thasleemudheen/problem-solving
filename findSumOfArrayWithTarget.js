function sumWithTarget(number,target){
    let sum=0;
    let result=[]
    for(let i=0;i<number.length;i++){
          if(sum!==target){
            sum=sum+number[i]
            result.push(i)
          }
    }
    return result
   
}
console.log(sumWithTarget([2, 7, 11, 15], 9))