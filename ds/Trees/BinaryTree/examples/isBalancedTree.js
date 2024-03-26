/**
 * Given a binary tree, determine if it is height-balanced
.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const height = function (node) {
  if (node === null) {
    return 0;
  }

  return Math.max(height(node.left), height(node.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  if (Math.abs(height(root.left) - height(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};
