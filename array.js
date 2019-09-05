const Memory = require('./memory')
const memory = new Memory()

class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);

    }
    /** 
     * To add a value you need to resize the memory allocated for the arary.
     * Go to the new box added and input set a new value.
     * increase length of the overall array
     * Every push requires resize therefore time complexity is O(n)
     * Otherwise O(1)-constnat
    */

    push(value) {
        this._resize(this.length + 1);
        //sequential
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    /**
     * 
     * resizing will be O(n)
     */
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
     pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    /**
     * we would push everything over by 1 starting at the index with the copy. O(n) copy
     * Ofcourse a resize needs to occur if we will be growing beyond our capacity O(n)
     */
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

const arr = new Array()
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(9)
console.log(arr.get(0))