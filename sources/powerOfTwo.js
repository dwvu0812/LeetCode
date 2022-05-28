// var isPowerOfTwo = function(n) {
//     if (n == 1) return true;
//     if (n % 2 == 0) {
//         return isPowerOfTwo(n/2);
//     } else {
//         return false;
//     }
// };

var isPowerOfTwo = function(n) {
    return (Math.log2(n) % 1 === 0);
};