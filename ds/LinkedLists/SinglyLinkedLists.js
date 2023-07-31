class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  get(index) {
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      if (curr === null) {
        return -1;
      }

      curr = curr.next;
      i += 1;
    }

    if (curr === null) {
      return -1;
    }

    return curr.value;
  }

  addAtHead(val) {
    const newHead = new LinkedListNode(val);

    newHead.next = this.head;

    this.head = newHead;
  }

  addAtTail(val) {
    const node = new LinkedListNode(val);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (this.head === null) {
      return;
    }

    let i = 1;
    let prev = this.head;
    let curr = this.head.next;
    while (i !== index) {
      if (curr === null) {
        return;
      }
      prev = curr;
      curr = curr.next;
      i += 1;
    }

    const node = new LinkedListNode(val);

    node.next = curr;
    prev.next = node;
  }

  deleteAtIndex(index) {
    if (this.head === null) {
      return;
    }

    let i = 0;
    let prev = null;
    let curr = this.head;

    while (i !== index) {
      if (curr === null) {
        return;
      }
      prev = curr;
      curr = curr.next;
      i += 1;
    }

    if (curr === null) {
      return;
    }

    if (prev !== null) {
      prev.next = curr.next;
      return;
    }

    this.head = curr.next;
  }
}
