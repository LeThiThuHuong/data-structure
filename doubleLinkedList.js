class Node {
    constructor(value, next, pre) {
        this.value = value;
        this.next = next;
        this.previous = pre;
    }

    setNext(next) {
        this.next = next;
    }

    getNext() {
        return this.next;
    }

    setPre() {
        this.previous = pre;
    }

    getPre() {
        return this.previous;
    }
}

class DoubleLinkedList {
    constructor() {
        this.links = [];
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    isEmpty() {
        return !this.size;
    }

    insertStart(value) {
        var node = new Node(value);
        this.links.push(node);
        if (this.isEmpty()) {
            this.start = this.links.length - 1;
            this.end = this.links.length - 1;
        } else {
            this.links[this.links.length - 1].setNext(this.start);
            this.start = this.links.length - 1;
        }
        this.size++;
    }

    insertEnd(value) {
        var node = new Node(value);
        this.links.push(node);
        if (this.isEmpty()) {
            this.start = this.links.length - 1;
            this.end = this.links.length - 1;
        } else {
            this.links[this.end].setNext(this.links.length - 1);
            this.end = this.links.length - 1;
        }
        this.size++;
    }

    getNodeByPosition(position) {
        let count = 0;
        let index = this.start;
        let preIndex;
        while (count !== position) {
            count++;
            index = this.links[index].next;
            preIndex = this.links[index].pre;
        }
        return { preIndex, index };
    }

    insertByPosition(value, position) {
        let node = new Node(value);
        this.links.push(node);
        index = this.getNodeByPosition(position)[index];
        this.links[this.links.length - 1].setNext(this.links[index].next);
        this.links[this.links.length - 1].setPre(this.links[index]);
        this.size++;
    }

    show() {
        let count = 0;
        let next = this.start;
        let pre;
        let doubleLinkedList = [];
        while (count !== this.links.length - 1) {
            count++;
            doubleLinkedList.push(this.links[next]);
            next = this.links[next].getNext();
        }
        return doubleLinkedList;
    }


    cutStart() {
        this.start = this.links[this.start].next;
        this.links[this.start].setPre(null);
        this.size--;
    }

    cutEnd() {
        this.end = this.links[this.end].pre;
        this.links[this.end].setNext(null);
        this.size--
    }

    cutByPosition(position) {
        let index = getNodeByPosition(position)[index];
        let preIndex = getNodeByPosition(position)[preIndex];
        this.links[preIndex].setNext(this.links[index].next);
        this.links[this.links[preIndex].setNext(this.links[index].next)].setPre(index);
        this.size--;
    }
}

