// var maxSubArray = function(nums) {
//     max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (max < sum) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// };
var maxSubArray = function(nums) {
    var sum = nums[0], 
        max = nums[0];
    for (var i = 1; i < nums.length; i++){
        if (sum < 0){
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
};


let nums = [1];

console.log(maxSubArray(nums))