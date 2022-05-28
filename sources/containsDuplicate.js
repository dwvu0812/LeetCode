var containsDuplicate = function(nums) {
    let temp = [];
    
    while (nums.length > 0) {
        let number = nums.pop();
        if (temp.includes(number)) {
            return true;
        } else {
            temp.push(number);
        }
    }
    return false;
};
let nums = [1,2,3,1];

console.log(containsDuplicate(nums))