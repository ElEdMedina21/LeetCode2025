var deleteDuplicates = function(head) {
    if(!head) return head
    let dummy = {val : 0, next : head}
    let node = dummy
    let i = head
    let j = head.next
    node.next = i
    while(j){
        if(j.val == i.val){
            j = j.next;
            i.next = j
        }else{
            i = i.next
            j = j.next
        }
    }
    return dummy.next
};

var deleteDuplicates = function(head) {
    let currentNode = head;
    while(currentNode){
        while(currentNode.next && currentNode.next.val === currentNode.val){
            currentNode.next = currentNode.next.next
        }
        currentNode = currentNode.next
    }
    return head
};