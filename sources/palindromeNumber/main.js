var isPalindrome = function(x) {
    let str = `${x}`;
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
};

console.log(isPalindrome(121))