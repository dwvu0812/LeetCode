var removeElement = function(nums, val) {
    let k = 0;
    for(let num of nums) {
        if (num != val) {
            nums[k] = num;
            k++;
        }
    }
    return k;
};

let nums = [3,2,2,3];

removeElement(nums, 3);