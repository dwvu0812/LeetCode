// var mySqrt = function(x) {
//     if ( x === 0 ) return 0;
//     let i = x;
//     while (i > x/i) {
//         i = (i + x/i)/2;
//     }
//     return Math.floor(i);
// };

//Time Limit Exceeded

var mySqrt = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  
    return right;
  };