/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (head == null) {
    return head;
  }

  let currHead = head;

  while (head.next !== null) {
    const temp = head.next;

    head.next = temp.next;
    temp.next = currHead;
    currHead = temp;
  }

  return currHead;
};
