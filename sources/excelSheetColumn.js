var titleToNumber = function(s) {
    let charCodeBase = 'A'.charCodeAt(0) -1;
    let n = s.length;
    let total = 0;

    for (let i = 0; i <n; i++) {
        total += (s.charCodeAt(i) - charCodeBase)*Math.pow(26, n - i - 1);
    }
    return total;
};