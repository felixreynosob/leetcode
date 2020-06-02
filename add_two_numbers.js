// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = (l1, l2) => {
    var nbr = (reversed_list_int_representation(l1) +
              reversed_list_int_representation(l2));

    return (int_to_reversed_list(nbr));
}

const reversed_list_int_representation = lst => {
  var nbr_arr = [], 
      node = lst;

  while (node) {
    nbr_arr.push(node.val);
    node = node.next;
  }
  
  var result = nbr_arr.reverse().toString().replace(/,/g,'');
  return parseInt(result, 10);
}

const int_to_reversed_list = n => {
  n = n.toString().split('').reverse();  
  var nodes = [];
  
  for (let v of n) {
    nodes.push(new ListNode(v));
  }
  for (let i = 0; i < nodes.length-1; i++) {
    nodes[i].next = nodes[i+1];
  }

  return nodes[0];
}

{
let l1 = new ListNode(2);
let l2 = new ListNode(4);
let l3 = new ListNode(3);

l1.next = l2, l2.next = l3;

let l4 = new ListNode(5);
let l5 = new ListNode(6);
let l6 = new ListNode(4);

l4.next = l5, l5.next = l6;
// console.log(reversed_list_int_representation(l1));
// console.log(reversed_list_int_representation(l4));
// console.log(int_to_reversed_list(807));

console.log(addTwoNumbers(l1, l4));

}
/* 
  1. Function to turn Linked list representation of a reversed number into an Integer.
  2. Function to turn Integer into reversed linked list number representation.
*/