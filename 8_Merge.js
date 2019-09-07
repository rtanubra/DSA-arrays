/**
 * magine you have 2 arrays which have already been sorted. 
 * Write an algorithm to merge the 2 arrays into a single array, 
 * which should also be sorted.
 * 
 * Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
 * Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
 */

function MergeArr(arr1,arr2){
    var leftIndex = 0
    var rightIndex = 0
    var startingArrIndex = 0
    var startingArr = []
    //while left index smaller than length and right index smaller than right 
    while (leftIndex<arr1.length && rightIndex<arr2.length){
        if (arr1[leftIndex] < arr2[rightIndex]){
            startingArr[startingArrIndex] =arr1[leftIndex]
            startingArrIndex ++
            leftIndex ++
        }
        else{
            startingArr[startingArrIndex] =arr2[rightIndex]
            startingArrIndex ++
            rightIndex ++
        }
    }
    //finish adding left array
    while (leftIndex<arr1.length){
        startingArr[startingArrIndex]  = arr1[leftIndex]
        startingArrIndex ++
        leftIndex ++
    }
    //OR finish adding right array
    while (rightIndex<arr2.length){
        startingArr[startingArrIndex]  = arr2[rightIndex]
        startingArrIndex ++
        rightIndex ++
    }
    return startingArr
}

/**
 * Linear time complexity 
 */
arr1 = [1, 3, 6, 8, 11]
arr2  = [2, 3, 5, 8, 9, 10]
console.log(MergeArr(arr1,arr2))

