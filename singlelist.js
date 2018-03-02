class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.next = nextNode;
    }
}

class SingleLinkedList {
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
        var node = new Node(value, null);
        this.links.push(node);
        if (this.isEmpty()) {
            this.start = this.links.length - 1;
            this.end = this.links.length - 1;
        } else {
            this.links[this.links.length - 1].next = this.start;
            this.start = this.links.length - 1;
        }
        this.size++;
    }

    insertEnd(value) {
        var node = new Node(value, null);
        this.links.push(node);
        if (this.isEmpty()) {
            this.start = this.links.length - 1;
            this.end = this.links.length - 1;
        } else {
            this.links[this.end].next = this.links.length - 1;
            this.end = this.links.length - 1;
        }
        this.size++;
    }


    getNodeByPosistion(position) {
        let currentIndex = this.start;
        let count = 0;
        let beforeIndex;
        while (count !== position) {
            count++;
            beforeIndex = currentIndex;
            currentIndex = this.links[currentIndex].next;
        };
        return {currentIndex: currentIndex, beforeIndex: beforeIndex};
    }

    insertByPosition(position, value) {
        var node = new Node(value, null);
        var index = this.getNodeByPosistion(position).currentIndex;
        this.links.push(node);
        this.links[this.links.length - 1].next = this.links[index].next;
        this.links[index].next = this.links.length - 1;
        this.size++;
    }

    show() {
        let count = 0;
        let showLinkedList = [];
        let value;
        let next = this.start;
        while (count !== this.size - 1) {
            count++;
            showLinkedList.push(this.links[next]);
            next = this.links[next].next;            
        }
        showLinkedList.push(this.links[next]);
        return showLinkedList;
    }

    cutStart() {
        this.start = this.links[this.start].next;
        this.size--;
    }

    cutPosition(position) {
        var {currentIndex, beforeIndex} = this.getNodeByPosistion(position);
        if (this.links[beforeIndex].next === this.end) {
            this.links[beforeIndex].next = null;
            this.size--;
        } else {
            this.links[beforeIndex].next = this.links[currentIndex].next;
            this.size--;
        }
    }
}

const linked = new SingleLinkedList();
linked.insertEnd(5);
linked.insertStart(1);
// console.log(linked.show());
linked.insertByPosition(1,10);
// console.log(linked.show());
linked.cutStart();
console.log(linked.show());

