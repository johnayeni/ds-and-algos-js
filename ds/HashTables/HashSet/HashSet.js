class HashSet {
  constructor() {
    this.size = 769;
    this.buckets = new Array(this.size);
  }

  hash(key) {
    return key % this.size;
  }

  add(key) {
    const hash = this.hash(key);

    if (!this.buckets[hash]) {
      this.buckets[hash] = [key];
    } else {
      if (!this.buckets[hash].includes(key)) {
        this.buckets[hash].push(key);
      }
    }
  }

  remove(key) {
    const hash = this.hash(key);
    if (this.buckets[hash]) {
      const index = this.buckets[hash].findIndex((k) => k === key);
      if (index > -1) this.buckets[hash].splice(index, 1);
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (this.buckets[hash] && this.buckets[hash].includes(key)) {
      return true;
    }
    return false;
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
  HashSet,
};
