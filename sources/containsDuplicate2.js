// var containsNearbyDuplicate = function(nums, k) {
//     let len = nums.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (nums[j] == nums[i]) {
//                 if (j - i == k) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
      map.set(nums[i], i);
    }
    return false;
  };

let  nums = [1,2,3,1];

console.log(containsNearbyDuplicate(nums, 3))