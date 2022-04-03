var arraySign = function(nums) {
    let checkZero = nums.some(num => num === 0);
    if (checkZero) return 0;
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArr.push(1);
        }
        else {
            newArr.push(-1);
        };
    };
    
    let result = newArr.reduce((res, item) => res*item, 1);
    return result
};