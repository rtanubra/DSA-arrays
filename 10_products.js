/**
 * Given an array of numbers, 
 * write an algorithm to find out the products of every other number except the number at each index.
Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
 */

function multiplier(arr,index){
    var prod = 1
    for(i=0;i<arr.length;i++){
        if (i!==index ){
            prod = prod * arr[i]
        }
    }
    return prod
}

function products(arr){
    const arrProducts = []
    for (i=0; i<arr.length;i++){
        arrProducts[i] = multiplier(arr,i)
    }
    return arrProducts
}
function main(){
    const arrIn= [1, 3, 9, 4]
    const arrOut = [108, 36, 12, 27]
    console.log(`Given ${arrIn} we should see ${arrOut}`)
}

