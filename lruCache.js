let ListNode = function (val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
};
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hashKeys = new Map();
  this.head = null;
  this.tail = this.head;
  this.count = 0;
};

/**
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.moveToFront = function (node) {
    let prev = node.prev;
    let next = node.next;
    if (prev) {
      prev.next = next;
    } else if(!prev){
        head = head.next;
    }
    if (next) {
      next.prev = prev;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.tail.next = null;
}
LRUCache.prototype.get = function (key) {
  if (this.hashKeys.has(key)) {
    let node = this.hashKeys.get(key);
    this.moveToFront(node);
    return this.hashKeys.get(key).val[1];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  console.log(
    "this.hashkeys",
    key,
    this.hashKeys.keys(),
    this.hashKeys.has(key)
  );
  if (this.hashKeys.has(key)) {
    let node = this.hashKeys.get(key);
    this.moveToFront(node);
    node.val[1] = value;
    this.hashKeys.set(key, node);
  } else {
    if (this.count === this.capacity) {
      let delKey = this.head.val[0];
      this.head = this.head.next;
      this.hashKeys.delete(delKey);
      this.count = this.count - 1;
    }
    let newNode = new ListNode([key, value], null, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.hashKeys.set(key, newNode);
    this.count = this.count + 1;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
