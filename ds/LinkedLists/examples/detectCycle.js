/**
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (head === null) {
    return null;
  }

  const set = new Set();

  let curr = head;

  while (curr.next !== null) {
    if (set.has(curr)) {
      return curr;
    }
    set.add(curr);
    curr = curr.next;
  }

  return null;
}
