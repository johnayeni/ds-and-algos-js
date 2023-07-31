// Given the head of a linked list, remove the nth node from the end of the list and return its head.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Solution with two pointers
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let curr = head;
  for (let i = 0; i < n; i++) {
    curr = curr.next;
  }

  if (curr === null) {
    return head.next;
  }

  let nodeToBeRemoved = head;
  while (curr.next !== null) {
    curr = curr.next;
    nodeToBeRemoved = nodeToBeRemoved.next;
  }

  nodeToBeRemoved.next = nodeToBeRemoved.next.next;

  return head;
}

/**
 * Solution with arrays
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// function removeNthFromEnd(head, n) {
//   if (head === null) {
//     return null;
//   }

//   const arr = [];
//   let curr = head;
//   while (curr !== null) {
//     arr.unshift(curr);
//     curr = curr.next;
//   }

//   if (n === arr.length) {
//     return head.next;
//   }

//   if (arr[n - 2] && n - 2 >= 0) {
//     arr[n].next = arr[n - 2];
//   } else {
//     arr[n].next = null;
//   }

//   return head;
// }
