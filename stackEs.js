class Stack {
    
    constructor(items){
        this.items = items;
        this.pointer = items.length;
    }

    push(value) {
        this.items[this.pointer] = value;
        this.pointer++;
    }

    pop() {
        this.pointer--;
        return this.items[this.pointer];
    }

}


const stack = new Stack([6, 5]);
console.log(stack);

stack.push(12);
console.log(stack.pop(), stack.pop())