/**
 * 7. 
 * Max sum in the array.
 * You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
 * Input: [4, 6, -3, 5, -2, 1]
 * Output: 12
 */

function maxSum(arr){
    maxSum = 0 
    var currentSum
    var maxLength
    var someArr
    for(i=0;i<arr.length;i++){
        //console.log(`starting at ${i}`)
        maxLength = arr.length-i 

        for (x=1;x<maxLength+1;x++){
            //currentSum = sumMe(arr.slice(i,i+x))
            someArr = [...arr.slice(i,i+x)]
            currentSum = someArr.reduce((a,b)=>{return a+b})
            //console.log(x,someArr,currentSum)
            if (currentSum>maxSum){
                maxSum = currentSum
            }
        }
    }
    return maxSum
}

console.log(maxSum([4,6,-3,5,-2,1]))