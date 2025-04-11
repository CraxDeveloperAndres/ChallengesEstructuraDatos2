class Node {
    constructor(song) {
      this.song = song;
      this.next = null;
    }
  }
  
  export class LinkedList {
    constructor() {
      this.head = null;
      this.current = null;
    }
  
    add(song) {
      const node = new Node(song);
      if (!this.head) {
        this.head = node;
      } else {
        let last = this.head;
        while (last.next) last = last.next;
        last.next = node;
      }
    }
  
    playNext() {
      if (!this.current) {
        this.current = this.head;
      } else {
        this.current = this.current.next;
      }
      return this.current?.song || "No more songs!";
    }
  
    reset() {
      this.current = this.head;
    }
  
    currentSong() {
      return this.current?.song || "Start playing!";
    }
  }
  