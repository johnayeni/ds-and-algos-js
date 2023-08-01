/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversal = function (root) {
  const traversal = [];

  const traverse = function (node) {
    if (node === null) {
      return;
    }
    traversal.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return traversal;
};
