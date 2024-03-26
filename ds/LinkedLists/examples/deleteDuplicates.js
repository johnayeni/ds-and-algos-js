function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const sentinel = new ListNode(null, head);

  let curr = head;
  let prev = sentinel;

  while (curr !== null) {
    if (prev.val === curr.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return sentinel.next;
};
