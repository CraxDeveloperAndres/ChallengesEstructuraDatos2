export default class Cola {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.length > 0 ? this.items.shift() : null;
    }
    peek() {
        return this.items.length > 0 ? this.items[0] : null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        return this.items;
    }
}
