/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isMirror = function (left, right) {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};
