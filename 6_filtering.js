/**
 * Imagine you have an array of numbers. 
 * Write an algorithm to remove all numbers less than 5 from the array.
 * DO NOT use Array's built-in .
 * filter() method here; write the algorithm from scratch.
 */

function filterArr(givenArr){
    const arr = []
    for (i=0;i<givenArr.length;i++){
        if(givenArr[i] >=5 ){
            arr.push(givenArr[i])
        }
    }
    return arr
}

arr1 = [1,5,6,4,3,8,9,10,4,3]
arr2 = [1,6,3,7,2,3,10,4,5,6]
console.log(arr1,filterArr(arr1))
console.log(arr2,filterArr(arr2))