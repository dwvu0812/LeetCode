// var twoSum = function(nums, target) {
//     let arr = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 arr.push(i, j);
//             }
//         }
//     }
//     return arr;
// };

// nums = [3,2,4]

// let result = twoSum(nums, 6);

// console.log(result);

const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };