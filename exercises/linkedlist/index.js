// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
    }
  }

  size() {
    if (!this.head) {
      return 0;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (currentNode) {
        count++;
        currentNode = currentNode.next;
      }
      return count;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    if (this.head) {
      let currentNode = this.head;
      while (currentNode) {
        if (!currentNode.next) {
          return currentNode;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  clear() {
    // if (this.head) {
    //   let currentNode = this.head;
    //   while (currentNode) {
    //     if (currentNode.next) {
    //       currentNode = currentNode.next;
    //       this.head = null;
    //     } else {
    //       break;
    //     }
    //   }
    // }
    //reassigning head to null removes any reference of the linkedlist
    this.head = null;
  }

  removeFirst() {
    // if (this.head) {
    //   let currentNode = this.head;
    //   let nextNode = this.head.next;
    //   this.head = nextNode;
    //   currentNode = null;
    // }

    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      // while (currentNode.next) {
      //   if (!currentNode.next.next) {
      //     currentNode.next = null;
      //   } else {
      //     currentNode = this.head.next;
      //   }
      // }
    }
  }

  insertLast(data) {
    const newNode = new Node(data);
    // if (!this.head) {
    //   this.head = newNode;
    // } else {
    //   let currentNode = this.head;
    //   while (currentNode) {
    //     if (!currentNode.next) {
    //       currentNode.next = newNode;
    //       break;
    //     } else {
    //       currentNode = currentNode.next;
    //     }
    //   }
    // }

    //call getLast()

    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(idx) {
    //calling this.size() will result in running an extra loop
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === idx) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }

    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(idx - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, idx) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let previous = this.getAt(idx - 1);
    if (!previous) {
      previous = this.getLast();
    }
    newNode.next = previous.next;
    previous.next = newNode;
  }

  forEach(fn) {
    let currentNode = this.head;

    while (currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }

  //see documentation on generators for code below.
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
