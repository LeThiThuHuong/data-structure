function Queue () {
    this.front = 0;
    this.back = 0;
    this.items = [];
}

Queue.prototype.enqueue = function(item) {
    this.items[this.back] = item;
    this.back++;
}

Queue.prototype.dequeue = function() {
    let item = this.items[this.front];
    this.front++;
    return item;
}

var queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.items);
console.log(queue.dequeue(), queue.dequeue());
