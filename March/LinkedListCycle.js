var hasCycle = function(head) {
    let i = head;
    let j = head;
    while(j && j.next){
        i = i.next;
        j = j.next.next;
        if(i === j) return true
    }
    return false
};