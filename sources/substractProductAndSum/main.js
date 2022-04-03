var subtractProductAndSum = function(n) {
    let arr = [];
    let temp = n;
    while (temp > 0) {
        let item = temp % 10;
        arr.push(item);
        temp = Math.floor(temp / 10);
    }
    
    let sum = arr.reduce((result, value) => result + value, 0);
    let product = arr.reduce((result, value) => result*value, 1);
    
    return product - sum;
};