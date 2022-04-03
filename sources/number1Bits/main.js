var hammingWeight = function(n) {
    let str = n.toString(2);
    let count = 0;
    let length = str.length;
    for (let i = 0; i < length; i++) {
        if (str[i] === '1') {
            count += 1
        }
    }
    return count
};