class ListNode { 
    // constructor 
    constructor(val) 
    { 
        this.val = val; 
        this.next = null
    } 
}

function addTwoNumbers (l1, l2) 
{
    var n1 = [];
    var n2 = [];
    var lst;
    var head;
    var ptr;
    var result;
    // console.log(l1);
    // console.log('------------');

    ptr = l1;
    while (ptr != null)
    {
        n1.push(ptr.val);
        ptr = ptr.next;
    }

    ptr = l2;
    while (ptr != null)
    {
        n2.push(ptr.val);
        ptr = ptr.next;
    }

    first_1 = 0.0;
    for (var i = (n1.length-1); i >= 0; i--)
    {
      first_1 *= 10;
      first_1 += n1[i];
    }

    first_2 = 0.0;
    for (var i = (n2.length-1); i >= 0; i--)
    {
      first_2 *= 10;
      first_2 += n2[i];
    }
    
    result = (first_1+first_2).toString();
    result = (Array.from(result)).reverse();

    return (linkedListFromArray(result));
}


function linkedListFromArray(arr)
{
  let head, list = null;
  
  for (var i = 0; i < arr.length; i++)
  {
    if (i == 0)
    {
      head = list = new ListNode(arr[i]);
      continue;
    } 
    list.next = new ListNode(arr[i]);
    list = list.next;
  }

  return (head);
}


lst1 = linkedListFromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
// lst1 = linkedListFromArray([3,4,5]);
lst2 = linkedListFromArray([5,6,4]);
// console.log(lst1, lst2);

addTwoNumbers(lst1, lst2)
// console.log(addTwoNumbers(lst1, lst2));

console.log(1000000000000000000000000000001);