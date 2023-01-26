class Node {
    #value = 0;
    #left = null;
    #right = null;
    constructor(value, left, right) {
        this.#value = value;
        this.#left = left;
        this.#right = right;
    }
    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }

    get left() {
        return this.#left;
    }
    set left(left) {
        this.#left = left;
    }
    get right() {
        return this.#right;
    }
    set right(right) {
        this.#right = right;
    }
}

class BinarySearchTree {
    #head = null;
    get head() {
        return this.#head;
    }
    set head(head) {
        this.#head = head;
    }
    notValidForTraversal(node) {
        return node == null
    }
    contains(num) {
        if (this.#head == null) return false
        let temp = this.#head;
        while (true) {
            if (num == temp.value) return true
            if (num < temp.value) {
                if (this.notValidForTraversal(temp.left)) {
                    return false
                }
                temp = temp.left;
            }
            if (num > temp.value) {
                if (this.notValidForTraversal(temp.left)) {
                    return false
                }
                temp = temp.right;
            }
        }
    }

    insert(num) {
        let node = new Node(num, null, null);
        if (this.#head == null) {
            this.#head = node;
            return true;
        }
        let temp = this.#head;
        while (true) {
            if (num < temp.value) {
                if (this.notValidForTraversal(temp.left)) {
                    temp.left = node;
                    return true;
                }
                temp = temp.left;
            }
            if (num > temp.value) {
                if (this.notValidForTraversal(temp.left)) {
                    temp.right = node;
                    return true;
                }
                temp = temp.right;
            }
        }
    }
}