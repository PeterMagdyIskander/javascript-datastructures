class Queue {
    #queueArr = [];
    get queueArr() {
        return this.#queueArr;
    }
    set queueArr(arr) {
        this.#queueArr = arr;
    }

    length() {
        return this.#queueArr.length;
    }
    empty() {
        return this.length() == 0;
    }
    front(){
        if (!this.empty()) {
            return this.#queueArr[0];
        }
        else {
            return -1;
        }
        
    }
    dequeue(){
        let item=this.front();
        if(item){
            this.#queueArr.splice(0,1);
        }
        return item;   
    }
    enqueue(num){
        this.#queueArr[this.length()]=num;
    }
}