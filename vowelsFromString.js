const str='thasleem'


function vowels(str){
    const vowels=['a','e','i','o','u']
    for(let i=0;i<str.length;i++){
      if(vowels.some(v=>v==str[i])){
          console.log(str[i])
      }
    }
}
vowels(str)