var countOdds = function(low, high) {
    var count = 0;
    if (low >= 0 && high <= 10^9) {
        for (var i = low; i <= high; i++) {
            if (i % 2 === 1) {
                count += 1;
            }
        }
    }
    return count
};