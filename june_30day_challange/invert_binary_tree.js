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
 *

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
  {
    if (root) {
      var queue = [root];

      while (queue.length > 0 ) {
        var node = queue[0];

        if (node.left && node.right) {
          [node.left, node.right] = [node.right, node.left];
          queue.push(node.left, node.right);
        }

        queue.shift();
      }
      return root;
    } else {
      return false;
    }
  }
};

n1 = new TreeNode(4);
n2 = new TreeNode(2);
n3 = new TreeNode(7);
n4 = new TreeNode(1);
n5 = new TreeNode(3);
n6 = new TreeNode(6);
n7 = new TreeNode(9);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.left = n6;
n3.right = n7;

// console.log(n1);
console.log(invertTree(null));

// const printTree = (root) => {
//   var queue = [];
//
// }








//
