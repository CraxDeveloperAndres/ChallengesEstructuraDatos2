class DNode {
    constructor(page) {
      this.page = page;
      this.prev = null;
      this.next = null;
    }
  }
  
  export class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.current = null;
    }
  
    visit(page) {
      const node = new DNode(page);
  
      // Si ya hay una página actual, y tiene "siguientes", se deben eliminar
      if (this.current) {
        this.current.next = null;
        this.tail = this.current;
      }
  
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
  
      this.current = node;
    }
  
    back() {
      if (this.current?.prev) {
        this.current = this.current.prev;
        return this.current.page;
      }
      return this.current?.page || "No previous page";
    }
  
    forward() {
      if (this.current?.next) {
        this.current = this.current.next;
        return this.current.page;
      }
      return this.current?.page || "No next page";
    }
  
    currentPage() {
      return this.current?.page || "No page visited";
    }
  }
  