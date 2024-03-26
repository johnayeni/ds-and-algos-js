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
    console.log("temp", JSON.stringify(temp));

    head.next = temp.next;
    console.log("head", JSON.stringify(head));

    temp.next = currHead;
    console.log("temp", JSON.stringify(temp));

    currHead = temp;
    console.log("currHead", JSON.stringify(currHead));

    console.log("----");
  }

  return currHead;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const linkedList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

reverseList(linkedList);
