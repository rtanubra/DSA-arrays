const Memory = require('memory')
const memory = new Memory()

class Array{
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
    }
    push(value){

    }
    _resize(size){

    }
    get(index){

    }
    //take off the last item
    pop(){

    }
    insert(index,value){

    }
    remove(index){
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
    }
}

Array.SIZE_RATIO = 3;
