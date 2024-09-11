const value=21

function printPrime(value){
    if(value<1){
        console.log('its not a prime')
    }
     for(let i=2;i<value;i++){
        if(value%i==0){
            return false
        }
     }
     return true
}

function listPrime(value){
     for(let i=2;i<value;i++){
       if(printPrime(i)){
        console.log(i)
       }
     }
}
listPrime(value)