/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
const inorderTraversal = function (root) {
  const traversal = [];

  const traverse = function (node) {
    if (node === null) {
      return;
    }
    traverse(node.left);
    traversal.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return traversal;
};
