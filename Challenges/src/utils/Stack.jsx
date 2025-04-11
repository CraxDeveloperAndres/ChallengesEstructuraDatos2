export default class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }
    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        return this.items.slice().reverse();
    }
}
