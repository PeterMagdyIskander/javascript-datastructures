class Item {
    #value = 0;
    #next = null;
    constructor(value, next) {
        this.#value = value;
        this.#next = next;
    }
    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }
    get next() {
        return this.#next;
    }
    set next(next) {
        this.#next = next;
    }
}

class LinkedList {
    head = null;
    tail = null;
    numberOfItems = 0;
    length() {
        return this.numberOfItems;
    }

    append(number) {
        if (this.head == null) {
            const item = new Item(number, null);
            this.numberOfItems += 1;
            this.head = item;
            this.tail = item;
            return;
        }
        let temp = this.head;
        while (true) {
            if (temp.next == null) {
                const item = new Item(number, null);
                this.numberOfItems += 1;
                temp.next = item;
                this.tail = item;
                return
            }
            temp = temp.next;
        }

    }

    at(num) {
        if (this.head == null || num < 0 || num >= this.numberOfItems) {
            return -1;
        }
        let index = 0;
        let temp = this.head;
        while (true) {
            if (temp.index === index) return temp.value
            temp = temp.next;
            index += 1;
        }
    }
    insertAtZeroBased(index, number) {
        if (this.head == null || index < 0 || index > this.length()) {
            return -1;
        }


        //if last item append it we dont need additional logic here
        if (index === this.length()) {
            this.append(number)
            return
        }

        const item = new Item(number, null);
        this.numberOfItems += 1;

        //if first item
        if (index == 0) {
            item.next = this.head;
            this.head = item;
            return
        }

        let counter = 0;
        let temp = this.head;
        while (true) {
            if (index-1 == counter ) {
                let temp2 = temp.next;
                temp.next = item;
                item.next = temp2;
                return
            }
            temp = temp.next;
            counter += 1;
        }
    }
    deleteAtZeroBased(index) {
        if (index >= this.length()) return console.log("invalid param")
        if (index == 0) {
            let newHead = this.head.next;
            this.head = newHead;
            this.numberOfItems -= 1;
            return
        }
        let counter = 0;
        let temp = this.head;
        while (true) {
            if (index - 1 == counter) { 
                if(index==this.length()-1){
                    temp.next=null;
                    this.tail=temp;
                    return;
                }
                temp.next = temp.next.next;
                return
            }

            temp = temp.next;
            counter += 1;
        }

    }
    showAllEntries() {
        if (this.head == null) {
            return -1;
        }
        let temp = this.head;
        let returnArr = [];
        while (true) {
            returnArr.push(temp.value);
            if (temp.next == null) return returnArr;
            temp = temp.next;
        }
    }

}


let linkedList = new LinkedList();
linkedList.append(1)//0
linkedList.append(2)//1
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
linkedList.insertAtZeroBased(0, 0)
linkedList.insertAtZeroBased(6, 7)
linkedList.insertAtZeroBased(7, 8)
linkedList.insertAtZeroBased(3, 3)
linkedList.deleteAtZeroBased(8)
console.log(linkedList.showAllEntries())