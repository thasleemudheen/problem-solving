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
  

// const array=[0,1,2,3,0,8,7,6,0]
// function zero(array){
//   for(let i=0;i<=array.length;i++){
//      if(array[i]==0){
//        let temp=array[i]
//         array[i+1]=temp
        
//      }

//   }
//   return array
  
// }
// console.log(zero(array))

// let array=[
//   {
//     "id": 1,
//     "first_name": "Jose",
//     "last_name": "Lopez",
//     "email": "joselopez0944@slingacademy.com",
//     "phone": ["+1-971-533-4552x1542","+9177777777"],
//     "gender": "male",
//     "age": 25,
//     "job_title": "Project Manager",
//     "years_of_experience": 1,
//     "salary": 8500,
//     "department": "Product",
//   "country":"India"
//   },
//   {
//     "id": 1,
//     "first_name": "Jose",
//     "last_name": "Lopez",
//     "email": "joselopez0944@slingacademy.com",
//     "phone": ["+1-971-533-4552x1542","+9177777777"],
//     "gender": "male",
//     "age": 25,
//     "job_title": "Project Manager",
//     "years_of_experience": 1,
//     "salary": 8500,
//     "department": "Product",
//   "country":"India"
//   },
//   {
//     "id": 1,
//     "first_name": "Jose",
//     "last_name": "Lopez",
//     "email": "joselopez0944@slingacademy.com",
//     "phone": ["+1-971-533-4552x1542","+0477777777"],
//     "gender": "male",
//     "age": 25,
//     "job_title": "Project Manager",
//     "years_of_experience": 1,
//     "salary": 8500,
//     "department": "Product",
//   "country":"germany"
//   },
//   {
//     "id": 1,
//     "first_name": "Jose",
//     "last_name": "Lopez",
//     "email": "joselopez0944@slingacademy.com",
//     "phone": ["+1-971-533-4552x1542","+02777777"],
//     "gender": "male",
//     "age": 25,
//     "job_title": "Project Manager",
//     "years_of_experience": 1,
//     "salary": 8500,
//     "department": "Product",
//   "country":"japan"
//   },
 
// ]
// let result=[]
// for(let i=0;i<array.length;i++){
//       array[i].phone.forEach((elem)=>{
//         if(elem.startsWith('+91')){
         
//           const {first_name,department,country}= array[i]
//           console.log(country,first_name,department)
//         }
//       })
// }

