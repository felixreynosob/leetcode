class ListNode():
    def __init__(self, val):
        self.val = val
        self.next = None

def nbr_to_list(nbr):
    res = [int(x) for x in str(nbr)]
    nodes = []
    for i in range(0,len(res)):
        nodes.append(ListNode(res[i])) 
    for i in range(0,len(nodes)-1):
        nodes[i].next = nodes[i+1]

    return (nodes[0])

def reversed_list_to_nbr(lst):
    nbr = 0
    while (lst):
        nbr += lst.val
        nbr *= 10
        lst = lst.next
    nbr = str(nbr)
    nbr = nbr[0:-1]
    nbr = nbr[::-1]
    return (int(nbr))

def nbr_to_reversed_list(nbr):
    nbr = str(nbr)[::-1]
    return nbr_to_list(int(nbr))


def add_two_numbers(l1, l2):
    n1 = reversed_list_to_nbr(l1)
    n2 = reversed_list_to_nbr(l2)
    
    res_head = nbr_to_reversed_list(n1+n2)
    return (res_head)

l1 = nbr_to_list(243) 
l2 = nbr_to_list(564)
result = add_two_numbers(l1, l2)
print(result.next.next.val)

# print(reversed_list_to_nbr(l1))
# print(reversed_list_to_nbr(l2))

# for x in nodes:
#     print("val: "+str(x.val)+" next: "+str(x.next))








#****************************************************
#****************************************************
#****************************************************
#****************************************************
class Solution(object):
    def addTwoNumbers(self,l1, l2):
        n1 = self.reversed_list_to_nbr(l1)
        n2 = self.reversed_list_to_nbr(l2)

        res_head = self.nbr_to_reversed_list(n1+n2)
        return (res_head)
    
    def nbr_to_list(self,nbr):
        res = [int(x) for x in str(nbr)]
        nodes = []
        for i in range(0,len(res)):
            nodes.append(ListNode(res[i])) 
        for i in range(0,len(nodes)-1):
            nodes[i].next = nodes[i+1]

        return (nodes[0])

    def reversed_list_to_nbr(self,lst):
        nbr = 0
        while (lst):
            nbr += lst.val
            nbr *= 10
            lst = lst.next
        nbr = str(nbr)
        nbr = nbr[0:-1]
        nbr = nbr[::-1]
        return (int(nbr))

    def nbr_to_reversed_list(self,nbr):
        nbr = str(nbr)[::-1]
        return self.nbr_to_list(int(nbr))