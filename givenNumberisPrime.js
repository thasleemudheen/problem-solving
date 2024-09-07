
function isPrime(int){
    let count=0
   for(let i=2;i<int;i++){
    if(int%i===0){
      console.log('its not a pime  prime')
      return 
    }
   } 
   console.log('its a primse') 
}
isPrime(7)