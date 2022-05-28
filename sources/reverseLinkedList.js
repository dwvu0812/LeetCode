var reverseList = function(head) {
    let [pre, current] = [null, head];
    while (current) {
        [current.next, pre, current] = [pre, current, current.next]
    }

};