var majorityElement = function(nums) {
    let n = nums.length;
    let obj={};
    for (let i = 0; i < n; i++) {
        if (nums[i] in obj) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(arr)
    return arr[0][0];
};

let nums = [2,2,1,1,1,2,2];

majorityElement(nums);