

function arrayMaker(arr){
    var finalArr = []
    var innerArrayLength
    var zero,arrToAdd
    for (i=0;i<arr.length;i++){
        zero=false
        arrToAdd = []
        innerArrayLength = arr[i].length
        for (x=0;x<innerArrayLength;x++){
            if (arr[i][x]===0){
                zero = true
            }
        }
        console.log(arr[i],zero)
        arr1 = zero? [...arr[i]] : [...arr[i]]
        finalArr.push(arr1)
        console.log('finshed adding')

    }
    return finalArr
}

const arr =[[1,0,1,1,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [1,0,1,1,1],
            [1,1,1,1,1]]
console.log(arr)
console.log(arr.length)
console.log(arrayMaker(arr))