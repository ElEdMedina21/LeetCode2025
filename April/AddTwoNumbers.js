function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function buildList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}


var addTwoNumbers = function(l1, l2) {
    let dummy = {val : 0, next : null}
    let node = dummy
    let extra = 0

    while(l1 || l2){
        l1 ? firstVal = l1.val : firstVal = 0
        l2 ? secondVal = l2.val : secondVal = 0
        let result = (firstVal*1 + secondVal*1 + extra).toString().split('')
        extra = 0
        if(result.length > 1){
            extra = result[0]*1
            result = result[1]*1
        }
        else{
            result = result[0]*1
        }
        node.val = result
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        if(l1 || l2){
            node.next = {val : 0, next : null}
            node = node.next
        }
    }
    if(extra > 0){
        node.next = {val : extra, next : null}
    }

    return dummy

};

let l1 = buildList([2,4,3]);  
let l2 = buildList([5,6,4]);

printList(addTwoNumbers(l1,l2))