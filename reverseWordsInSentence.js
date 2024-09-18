const str='iam happy now'
function reverseWords(str){
    const array=str.split(' ')
    const newArr=array.map((a)=>{
       return a.split('').reverse().join('')
    })
    return newArr.join(' ')
}

console.log(reverseWords(str));
