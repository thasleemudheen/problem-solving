let newArr=[1,2,8,3,4,5,6,7,1,2,3,10]
// function duplicatedArray(array){
//       let newArr=[]
//       for(let i=0;i<array.length;i++){
//         if(!newArr.includes(array[i])){
//             newArr.push(array[i])
//         }
//       }
//       return newArr
// }
// console.log(duplicatedArray(newArr))
  const newSet=[...new Set(newArr)]
  console.log(newSet)

