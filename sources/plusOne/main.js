var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        if (digits[i] <= 9) {
            return digits;
        }
        digits[i] = 0;
    }
    let result = new Array(digits.length + 1).fill(0);
    result[0] = 1;
    
    return result;
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

console.log(plusOne(digits));