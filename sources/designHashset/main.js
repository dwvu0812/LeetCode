var LinkedNode = function(value) {
    this.val = value;
    this.next = null;
}

var MyHashSet = function() {
    this.buckets = [];
    this.bucketsLen = 1000;
}

MyHashSet.prototype.add = function(key) {
    let hashCode = key % this.bucketsLen;

    if (!this.buckets[hashCode]) { 
        this.buckets[hashCode] = new LinkedNode(0);
        let head = this.buckets[hashCode];
        head.next = new LinkedNode(key);
        return;
    }
    else {
        let head = this.buckets[hashCode];
        let point = head;
        head = head.next;

        while (head !== null) {
            if (head.val === key) {
                return;
            }
            else {
                point = head;
                head = head.next;
            }
        }
        point.next = new LinkedNode(key);
        return;
    }
}

MyHashSet.prototype.remove = function(key) {
    let hashCode = key % this.bucketsLen;
    let head = this.buckets[hashCode];
    if (!head) {
        return;
    }
    else {
        let point = head;
        let cur = head.next;
        while (cur !== null) {
            if (cur.val === key) {
                point.next = cur.next;
                return;
            }
            point = cur;
            cur = cur.next;
        }
    }
    return;
}

MyHashSet.prototype.contains = function (key) {
    let hashCode = key % this.bucketsLen;
    let head= this.buckets[hashCode];

    if (!head) {
        return false;
    }
    else {
        head = head.next;
        while (head !== null) {
            if(head.val === key) {
                return true;
            }
            head = head.next;
        }
        return false;
    }
}
