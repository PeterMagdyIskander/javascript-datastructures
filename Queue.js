class Queue {
    #queueArr = [];
    #queueMaxLength = 0;
    #dequeueParameter = 0;
    #enqueueParameter = 0;
    #numberOfItems = 0;
    constructor(maxLength) {
        this.#queueMaxLength = maxLength;
        for (let i = 0; i < maxLength; i++) {
            this.#queueArr.push(0);
        }
    }
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
    front() {
        if (!this.empty()) {
            return this.#queueArr[this.#dequeueParameter];
        }
        else {
            return -1;
        }
    }
    validateDequeueParamete() {
        this.#dequeueParameter += 1;
        if (this.#dequeueParameter == this.#queueMaxLength) this.#dequeueParameter = 0;
    }
    validateEnqueueParamete() {
        this.#enqueueParameter += 1;
        if (this.#enqueueParameter == this.#queueMaxLength) this.#enqueueParameter = 0;
    }
    dequeue() {
        this.#numberOfItems -= 1;
        let item = this.front();
        if (item) {
            this.#queueArr.splice(this.#dequeueParameter, 1, 0);
        }
        this.validateDequeueParamete();
        return item;
    }
    enqueue(num) {
        if (this.#numberOfItems == this.#queueMaxLength) return -1
        this.#numberOfItems += 1;
        this.#queueArr[this.#enqueueParameter] = num;
        this.validateEnqueueParamete();
    }
}

// let q =new Queue(5);
// console.log(q.enqueue(1))
// console.log(q.queueArr);
// console.log(q.enqueue(2))
// console.log(q.queueArr);
// console.log(q.dequeue())
// console.log(q.queueArr);
// console.log(q.enqueue(3))
// console.log(q.queueArr);
// console.log(q.enqueue(4))
// console.log(q.queueArr);
// console.log(q.dequeue())
// console.log(q.queueArr);
// console.log(q.enqueue(1))
// console.log(q.queueArr);
// console.log(q.enqueue(2))
// console.log(q.queueArr);
// console.log(q.enqueue(3))
// console.log(q.queueArr);
// console.log(q.enqueue(4))
// console.log(q.queueArr);
// console.log(q.dequeue())
// console.log(q.queueArr);
