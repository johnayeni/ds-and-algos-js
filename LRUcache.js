function Node(key, val, next, prev) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.prev = prev;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    const left = new Node(0, 0);
    const right = new Node(0, 0);

    left.next = right;
    right.prev = left;

    this.left = left;
    this.right = right;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  addNode(node) {
    const prev = this.right.prev;
    const next = this.right;

    prev.next = node;
    next.prev = node;

    node.next = next;
    node.prev = prev;
  }

  getLeastRecentlyUsed() {
    return this.left.next;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);

      this.removeNode(node);
      this.addNode(node);

      return node.val;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);

      this.removeNode(node);
      this.addNode(node);

      node.val = value;
    } else {
      const node = new Node(key, value);

      this.addNode(node);

      this.cache.set(key, node);

      if (this.cache.size > this.capacity) {
        const lru = this.getLeastRecentlyUsed();

        this.removeNode(lru);

        this.cache.delete(lru.key);
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
