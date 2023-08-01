/**
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum, currentSum = 0) {
  if (root === null) {
    return false;
  }

  const sum = root.val + currentSum;

  if (root.left === null && root.right === null && sum === targetSum) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum, sum) ||
    hasPathSum(root.right, targetSum, sum)
  );
};
