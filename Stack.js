class Stack {
    #stackArr = [];

    get stackArr() {
        return this.#stackArr;
    }

    set stackArr(arr) {
        this.#stackArr=arr;
    }

    length() {
        return this.#stackArr.length;
    }
    push(num) {
        this.#stackArr.push(num);
    }
    empty() {
        return this.length() == 0
    }
    pop() {
        let item = this.top();
        if (item) {
            this.#stackArr.splice(this.#stackArr.length - 1, 1);
        }
        return item;
    }
    top() {
        if (!this.empty()) {
            return this.#stackArr[this.#stackArr.length - 1]; 
        }
        else {
            return -1;
        }
    }
}