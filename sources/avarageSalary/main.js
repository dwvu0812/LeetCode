var average = function(salary) {
    salary.sort((a, b) => a -b);
    salary.pop();
    salary.shift();
    let total = salary.reduce((sum, value) => sum + value, 0)
    
    return total/(salary.length)
};