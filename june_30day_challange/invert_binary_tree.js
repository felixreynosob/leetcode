/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

* Definition for a binary tree node.
* @param {TreeNode} root
* @return {TreeNode}
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
 }
}

var invertTree = root => {
  if (root) {
    var queue = [root];

    while (queue.length > 0 ) {
      var node = queue[0];

      if (node.left && node.right) {
        [node.left, node.right] = [node.right, node.left];
        queue.push(node.left, node.right);
      } else if (node.left && !node.right) {
          node.right = new TreeNode(node.left.val, node.left.left, node.left.right);
          node.left = null;
          queue.push(node.right);
      } else if (!node.left && node.right) {
          node.left = new TreeNode(node.right.val, node.right.left, node.right.right);
          node.right = null;
          queue.push(node.left);
      }

      queue.shift();
    }
    return root;
  } else {
    return null;
  }
};
