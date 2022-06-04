var addDigits = function(num) {
    if (!Number.isInteger(num)) {
        return;
    }
    let s = num.toString();
    if (s.length === 1) {
        return num;
    } else {
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            sum += parseInt(s[i]);
        }
        return addDigits(sum);
    }
};