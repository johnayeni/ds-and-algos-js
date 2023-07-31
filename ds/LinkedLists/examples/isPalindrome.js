/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

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

const getEndOfFirstHalf = (head) => {
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
/**
 * SOLUTION USING REVERSE LINKED LIST
 * Time complexity 0(n);
 * Space complexity 0(1);
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome1 = function (head) {
  const endOfFirstHalf = getEndOfFirstHalf(head);
  const startOfSecondHalfReversedList = reverseList(endOfFirstHalf.next);

  let p1 = head;
  let p2 = startOfSecondHalfReversedList;

  while (p2 !== null) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

/**
 * SOLUTION WITH ARRAYS
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time complexity 0(n);
 * Space complexity 0(1);
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome2 = function (head) {
  const arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    if (arr[p1] !== arr[p2]) {
      return false;
    }
    p1 += 1;
    p2 -= 1;
  }

  return true;
};
