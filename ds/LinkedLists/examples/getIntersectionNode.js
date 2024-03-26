/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Solution using two pointers
 * Time complexity O(n)
 * Space complexity O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let p1 = headA;
  let p2 = headB;
  while (!(p1 === null && p2 === null)) {
    if (p1 === p2) {
      return p1;
    }
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }

    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }
  return null;
};
