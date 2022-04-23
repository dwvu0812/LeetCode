var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length -1;

    while (low <= high) {
        let mid = Math.floor(low + (high -low) / 2);
        console.log(mid);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] > target) {
            high = mid - 1;
        }
        else low = mid + 1;
    }

    return low;
};

let nums = [1,3,5,6];

console.log(searchInsert(nums, 5));