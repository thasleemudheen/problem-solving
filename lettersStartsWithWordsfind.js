const strings = ['Apple', 'Banana', 'Apricot', 'Blueberry', 'Avocado'];
const letter='B'
function startWith(array,letter){
    let newArr=[];
    for(let i=0;i<array.length;i++){
        if(array[i].startsWith(letter)){
           newArr.push(array[i])
        }
    }
    return newArr
}
console.log(startWith(strings,letter))