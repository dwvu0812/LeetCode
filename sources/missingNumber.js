var missingNumber = function(nums) {
    let len = nums.length;
    for (let i = 0; i <= len+1; i++) {
        if (nums.includes(i) == false) {
            return i;
        }
    }
};