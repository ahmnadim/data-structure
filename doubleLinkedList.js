class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        var popedNode = this.tail;

        if(!this.head){
            return undefined;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;            
        }
        this.length--;
        return popedNode;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        var shiftNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }

        this.length--;
        return this.shiftNode;
    }
}

var dll = new DoublyLinkList()
dll.push(1)
dll.push(2)

