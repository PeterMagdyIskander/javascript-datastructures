class ArrayList {
    #arrayList = [];
    get arrayList() {
        return this.#arrayList;
    }
    set arrayList(arr) {
        this.#arrayList = arr;
    }
    length() {
        return this.#arrayList.length;
    }
    empty() {
        return this.length() == 0;
    }
    append(num) {
        this.#arrayList.push(num)
    }
    At(index) {
        if (index < 0 || index >= this.length()) return -1;
        return this.#arrayList[index];
    }
    deleteAt(index) {
        if (index < 0 || index >= this.length()) return -1;
        for (let i = index; i < this.length() - 1; i++) {
            this.#arrayList[i] = this.#arrayList[i + 1];
        }
        this.#arrayList[this.length() - 1] = 0;
        return
    }

    insetAt(indexToInsertIn, num) {
        if (indexToInsertIn < 0 || indexToInsertIn > this.length()) return -1;
        for (let i = this.length() - 1; i > indexToInsertIn; i--) {
            this.#arrayList[i] = this.#arrayList[i - 1];
        }
        this.#arrayList[indexToInsertIn] = num;
        return
    }

    clear() {
        for (let i = index; i < this.length(); i++) {
            this.#arrayList[i] = 0;
        }
        return
    }
}