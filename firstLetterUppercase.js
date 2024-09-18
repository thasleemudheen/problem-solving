const str='iam happy now'

function firstLetterUpperCase(str){
    const array=str.split(' ')
    const result=array.map((a)=>{
     return a.charAt(0).toUpperCase()+a.slice(1)
    })
    return result.join(' ')
      
}

console.log(firstLetterUpperCase(str));
