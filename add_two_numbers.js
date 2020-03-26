

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 function reversedListToNumber(list) 
 {
  let n1 
  let lst = list;
  while (lst) 
  {
    n1 += lst.val.toString();
    lst = lst.next;
  }

  n1 = n1.split("");
  n1.reverse();
  n1 = n1.join("");
  return parseInt(n1);
}

function createListFromArray(array)
{
  arr = [];
  for (var i = 0; i < array.length; i++)
    arr.push(new ListNode(array[i]));
  for (var i = 0; i < arr.length; i++)
  {
    if (i == (arr.length-1))
      continue;
    arr[i].next = arr[i+1];
  }
  return (arr);
}

function numberToReversedList(nbr)
{
  nbr = nbr.toString()
  nbr = nbr.split("");
  nbr.reverse();
  return (createListFromArray(nbr));
}

var addTwoNumbers = function(l1, l2) 
{
    let n1 = reversedListToNumber(l1);
    let n2 = reversedListToNumber(l2);
    var result = numberToReversedList(n1+n2);
    return (result[0]);
}
    
// var addTwoNumbers = function(l1, l2) {
//   let head, c= head,  one = l1, two = l2, carry = 0;


//   while(one || two) {
//       let x = 0, y = 0, sum = carry, next, tmpNode;
//       if(one.val){
//           x = one.val;
//       }
//       if(two.val){
//           y = two.val;
//       }
//       sum += x + y;
//       carry = Math.floor(sum / 10);
//       next = sum % 10;
//       tmpNode = new ListNode(next);
//       if(head == null){
//           head =  new ListNode(next);
//           c = head;
//       }else{
//           c.next = tmpNode;
//           c = c.next;
//       }
//     if(one.next != null){
//       one = one.next;
//     }else{
//       one = false
//     }
//     if(two.next != null){
//       two = two.next;
//     }else{
//       two = false
//     }
//   }
//   if(carry > 0){
//       let tmpNode= new ListNode(carry);
//       c.next = tmpNode;
//   }
//   return head;
// };
let l1 = new ListNode(2);
let l2 = new ListNode(4);
let l3 = new ListNode(3);

l1.next = l2;
l2.next = l3;


let l4 = new ListNode(5);
let l5 = new ListNode(6);
let l6 = new ListNode(4);

l4.next = l5;
l5.next = l6;

console.log(addTwoNumbers(l1, l4));

