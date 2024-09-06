const array=[9,8,43,50,56,23,12]

// const secLarge=array.sort((a,b)=>b-a)[1]
// console.log(secLarge)

function secLargest(array){
    let largest=0;
    let secondLarge=0;
        for(let i=0;i<array.length;i++){
            if(largest<array[i]){
                secondLarge=largest
                largest=array[i]
            }else if(array[i] > secondLarge && array[i] !== largest){
                secondLarge=array[i]
            }
        }
        return secondLarge
}
console.log(secLargest(array));
