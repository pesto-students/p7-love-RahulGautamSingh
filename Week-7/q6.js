// Implement a Queue using 2 stack

class Queue {
    constructor() {
        this.mainStack = [];
        this.helperStack = [];
    }

    push(elem) {
        this.mainStack.push(elem);
    }

    pop() {
        let n = this.mainStack.length;
        for (let i = n - 1; i > 0; i--) {
            this.helperStack.push(this.mainStack[i]);
        }

        this.mainStack = [];

        n = this.helperStack.length;
        for (let i = n - 1; i >= 0; i--) {
            this.mainStack.push(this.helperStack[i]);
        }
        this.helperStack = []
    }

    peek() {
        console.log(this.mainStack);
    }
}

const queue = new Queue();
queue.push(1);
queue.peek();
queue.push(2);
queue.peek();
queue.push(3);
queue.peek();
queue.push(4);
queue.peek();
queue.pop();
queue.peek();
queue.push(5);
queue.peek();
queue.pop();
queue.peek();