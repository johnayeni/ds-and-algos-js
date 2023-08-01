/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  const queue = [root];
  let level = 0;
  let levelOrder = [];

  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const curr = queue.shift();

      if (levelOrder[level]) {
        levelOrder[level].push(curr.val);
      } else {
        levelOrder[level] = [curr.val];
      }

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    level += 1;
  }

  return levelOrder;
};
