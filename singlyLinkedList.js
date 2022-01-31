class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tale = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tale = newNode
        }else{
            this.tale.next = newNode
            this.tale = newNode

        
        }
        this.length++
        return this
        
        
    }
}