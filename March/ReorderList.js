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

var reorderList = function(head) {
    let posArr = []
    let current = head
    while(current){
        posArr.push(current.val)
        current = current.next        
    }
    let i = 0;
    let j = posArr.length-1;
    current = head;
    for(let counter = 0; counter < posArr.length; counter++){
        if(counter % 2 == 0){
            current.val = posArr[i]
            i++
        }
        else{
            current.val = posArr[j]
            j--
        }
        current = current.next
    }
    return head
};

let head = createLinkedList([1, 2, 3, 4]);
console.log("Before reorder:");
printLinkedList(head);

reorderList(head);

console.log("After reorder:");
printLinkedList(head);
