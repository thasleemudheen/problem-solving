const int=12349;

function sumOfDigit(int){
    const arr=int.toString().split('')
    const digit=arr.map((a)=>parseInt(a))
    const result=digit.reduce((acc,curr)=>acc+curr,0)
    return result
}
console.log(sumOfDigit(int))