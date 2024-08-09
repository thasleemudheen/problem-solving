function isAnagram(str1,str2){
    let arr1=str1.split('')
    for(let i=0;i<str2.length;i++){
        if(arr1.includes(str2[i])){
            return true
        }else{
            return false
        }
    }
}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello', 'world'))