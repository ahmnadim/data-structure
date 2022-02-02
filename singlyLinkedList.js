class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode

        
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;

        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;

        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length == 0){
            this.tail = null
        }
        return oldHead;
    }

    unshift(val){
        if(!this.head){
            return this.push(val)            
        }

        var oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
        this.length++;
        return this.head;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }

        return current;
    }

    set(index, val){
        var node = this.get(index)
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val)

        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        var current = new Node(val);

        prevNode.next = current;
        current.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop();

        var prevNode = this.get(index-1);
        var removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }

}