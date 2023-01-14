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
        return this.#stackArr.length == 0
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
            let item = this.#stackArr[this.#stackArr.length - 1];
            return item;
        }
        else {
            return -1;
        }
    }
}

let s = new Stack();
console.log(s.stackArr)
s.push(1)
console.log(s.stackArr)
console.log('top', s.top())
console.log(s.stackArr)
console.log('pop', s.pop())
console.log(s.stackArr)
