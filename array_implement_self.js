const Memory = require('./memory')
const memory = new Memory()

class Array{
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
    }
    push(value){
        if (this.length + 1 > this.capacity){
            this._resize((this.length+1)*Array.SIZE_RATIO)
        }
        memory.set(this.ptr+this.length,value)
        this.length ++ 
    }
    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr,oldPtr,this.length)
        memory.free(oldPtr);
        this._capacity = size; //make new size
    }
    get(index){
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr+index)
    }
    //take off the last item
    pop(){
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr+this.length-1)
        memory.free(this.ptr+this.length)
        this.length--;
        return value

    }
    insert(index,value){
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length + 1 > this.capacity){
            this._resize((this.length+1)*Array.SIZE_RATIO)
        }
        //copy everything 1 forward starting from index
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        //place new value
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index){
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        //copy to the index 
        //copy everything that was once above
        //don't copy the last one.
        memory.copy(this.ptr + index , this.ptr + index+1, this.length - index-1);
        this.length--;
    }
}

Array.SIZE_RATIO = 4;
function arrPrinter(arr){
    const arrPrint=[]
    for (i=0;i<arr.length;i++){
        arrPrint.push(arr.get(i))
    }
    return arrPrint
}
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    console.log(arrPrinter(arr))
    console.log(arr.pop())
    console.log(arr.pop())
    console.log('after popping twice')
    console.log(arr);
    console.log(arrPrinter(arr))
    console.log("***************clearing*********************")
    while (arr.length>0){
        console.log(`popping`,arr.pop())
    }
    console.log(arrPrinter(arr))
    arr.push('tauhida')
    console.log(arrPrinter(arr))
}
/**
 * My result shows NaN.
 * I suspect it is because the memory is already allocated to a specific datatype. 
 * Therefore when looking to insert a string in its place i cannot do that.
 * resize is done to add change the size of the contiguous memory allocated for your array.
 */

main()