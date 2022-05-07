// var singleNumber = function(nums) {
//     let setNums = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (setNums.has(nums[i])) {
//             setNums.delete(nums[i]);
//         } else {
//             setNums.add(nums[i]);
//         }
//     }
//     return setNums;
// };
var singleNumber = function(nums) {
    return nums.reduce((res, cur) => res^cur);
};
