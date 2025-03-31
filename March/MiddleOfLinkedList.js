var middleNode = function(head) {
    let count = 0;
    let i = head;
    while(i){
        i = i.next;
        count++
    }
    count % 2 == 0 ? count = count/2+1 : count = Math.trunc(count/2) + 1
    console.log(count)
    i = head;
     for(let j = 1; j < count; j++){
         i = i.next
     }
    return i
};

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
};