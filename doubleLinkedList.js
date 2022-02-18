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

    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var current = this.head;
        if(index <= this.length/2){
            var count = 0;
            while(index !== count){
                current = current.next;
                count++;
            }
        }else{
            var count = this.length-1;
            while(index !== count){
                current = current.next;
                count--;
            }
        }
        return current;
        
    }

    set(index, val){
        var item = this.get(index);
        if(!item)return false;
        item.val = val;
        return true;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;
        newNode.next = afterNode;
        this.length++;

        return true;
        
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var removeNode = this.get(index);
        var beforeNode = removeNode.prev;
        var afterNode = removeNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }
}

var dll = new DoublyLinkList()
dll.push(1)
dll.push(2)

