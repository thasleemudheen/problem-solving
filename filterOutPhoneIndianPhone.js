

let array=[
  {
    "id": 1,
    "first_name": "Jose",
    "last_name": "Lopez",
    "email": "joselopez0944@slingacademy.com",
    "phone": ["+1-971-533-4552x1542","+9177777777"],
    "gender": "male",
    "age": 25,
    "job_title": "Project Manager",
    "years_of_experience": 1,
    "salary": 8500,
    "department": "Product",
  "country":"India"
  },
  {
    "id": 1,
    "first_name": "Jose",
    "last_name": "Lopez",
    "email": "joselopez0944@slingacademy.com",
    "phone": ["+1-971-533-4552x1542","+9177777777"],
    "gender": "male",
    "age": 25,
    "job_title": "Project Manager",
    "years_of_experience": 1,
    "salary": 8500,
    "department": "Product",
  "country":"India"
  },
  {
    "id": 1,
    "first_name": "Jose",
    "last_name": "Lopez",
    "email": "joselopez0944@slingacademy.com",
    "phone": ["+1-971-533-4552x1542","+0477777777"],
    "gender": "male",
    "age": 25,
    "job_title": "Project Manager",
    "years_of_experience": 1,
    "salary": 8500,
    "department": "Product",
  "country":"germany"
  },
  {
    "id": 1,
    "first_name": "Jose",
    "last_name": "Lopez",
    "email": "joselopez0944@slingacademy.com",
    "phone": ["+1-971-533-4552x1542","+02777777"],
    "gender": "male",
    "age": 25,
    "job_title": "Project Manager",
    "years_of_experience": 1,
    "salary": 8500,
    "department": "Product",
  "country":"japan"
  },
 
]
let result=[]
for(let i=0;i<array.length;i++){
      array[i].phone.forEach((elem)=>{
        if(elem.startsWith('+91')){
         
          const {first_name,department,country}= array[i]
          console.log(country,first_name,department)
        }
      })
}

