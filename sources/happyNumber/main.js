var isHappy = function(n) {
    
    if (n == 1 || n ==7) {
        return true;
    }
    let sum = n, x = n;
    while (sum > 9) {
        sum = 0;
        while  (x > 0) {
            sum += (x % 10)*(x % 10);
            x = parseInt(x/10);
        }
        if (sum == 1) {
            return true;
        }
        x  = sum;
    }
    if (sum == 7) {
        return true;
    }
    return false;
    
}

console.log(isHappy(13));