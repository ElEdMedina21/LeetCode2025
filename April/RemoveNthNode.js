class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

var removeNthFromEnd = function(head, n) {
    let i = head;
    let count = 0;
    while(i){
        count++;
        i = i.next
    }
    console.log(count)
    let dummy = {val : 0, next: null}
    node = dummy
    node.next = head
    for(i = 0; i < count-n; i++){
        node = node.next
    }
    node.next = node.next.next
    return dummy.next
};

let head = createLinkedList([1]);
removeNthFromEnd(head,1)
console.log("Result:");
printLinkedList(head);