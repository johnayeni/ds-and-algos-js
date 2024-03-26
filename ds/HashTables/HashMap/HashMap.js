class HashMap {
  constructor() {
    this.size = 2049;
    this.buckets = new Array(this.size);
  }

  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const hash = this.hash(key);

    if (!this.buckets[hash]) {
      this.buckets[hash] = [[key, value]];
    } else {
      const index = this.buckets[hash].findIndex(([k]) => k === key);
      if (index > -1) {
        this.buckets[hash].splice(index, 1, [key, value]);
      } else {
        this.buckets[hash].push([key, value]);
      }
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (this.buckets[hash]) {
      const kv = this.buckets[hash].find(([k]) => k === key);
      return kv?.[1] ?? -1;
    }
    return -1;
  }

  remove(key) {
    const hash = this.hash(key);
    if (this.buckets[hash]) {
      this.buckets[hash] = this.buckets[hash].filter(([k]) => k != key);
    }
  }
}

/**
 * Your HashSet class will be instantiated and called as such:
 * var obj = new HashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
module.exports = {
  HashMap,
};
