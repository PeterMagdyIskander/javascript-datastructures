class Item {
    value=0;
    index=0;
    nextItem=null;
    constructor(value, index , nextItem ) {
        this.value = value;
        this.index = index;
        this.nextItem = nextItem;
    }
    get value() {
        return this.value;
    }
    set value(value) {
        this.value = value;
    }
    get index() {
        return this.index;
    }
    set index(index) {
        this.index = index;
    }
    get nextItem() {
        return this.nextItem;
    }
    set nextItem(nextItem) {
        this.nextItem = nextItem;
    }
    isTail() {
        return this.nextItem == null;
    }

}

class LinkedList {
    head=null;
    numberOfItems = 0;
    length() {
        return this.numberOfItems;
    }
    append(number){
        if(this.head==null){
            const item=new Item(number,this.length(),null);
            this.numberOfItems+=1;
            this.head=item;
            return;
        }
        let temp=this.head;
        while(true){
            if(temp.nextItem==null){
                const item=new Item(number,this.length(),null);
                this.numberOfItems+=1;
                temp.nextItem=item;   
                return   
            }
            temp=temp.nextItem;
        }

    }

    at(num){
        if(this.head==null||num<0||num>this.numberOfItems){
            return -1;
        }
        let temp=this.head;
        while(true){
            
            if(temp.index===num)return temp.value
            if(temp.nextItem==null)return
            temp=temp.nextItem;
        }
    }
    showAllEntries(){
        if(this.head==null){
            return -1;
        }
        let temp=this.head;
        let returnArr=[];
        while(true)
        {
            returnArr.push(temp.value);
            if(temp.nextItem==null) return returnArr;
            temp=temp.nextItem;
        }
    }

}