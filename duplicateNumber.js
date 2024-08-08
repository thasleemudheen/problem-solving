let newArr=[1,2,8,3,4,5,6,7,1,2,3,10]
function duplicated(newArr){
    let newArray=[]
     for(let i=0;i<newArr.length;i++){
         if(!newArray.includes(newArr[i])){
             newArray.push(newArr[i])
         } 
     }    
     return newArray
}
   
 console.log(duplicated(newArr))
  

