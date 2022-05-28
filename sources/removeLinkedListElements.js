var removeElements = function(head, val) {
    if (!head) return null;

    while (head) {
        if (head.val == val) {
            head = head.next;
        } else {
            break;
        }
    }

    let curr = head;

    while(curr.next) {
        if (curr.next.val == val) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next
        }
    }
    return head;
};