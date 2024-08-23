const array=[0,1,2,3,0,8,7,6,0]
function zero(array){
    let index=0;
  for(let i=0;i<array.length;i++){
    if(array[i]!==0){
       if(i!==index){
         [array[index],array[i]]=[array[i],array[index]]
       }
       index++;
       
    }
  }
  return array
}
console.log(zero(array))