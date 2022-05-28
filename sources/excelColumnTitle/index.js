var convertToTitle = function(n) {
    if (n == 0 ) return null;
    let result = '';

    while (n > 0) {
        let r = n % 26;
        let d = parseInt(n / 26);

        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result = String.fromCharCode(r + 64) + result;
        n = d;
    }
    return result;
};

console.log(convertToTitle(1));