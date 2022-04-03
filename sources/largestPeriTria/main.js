var largestPerimeter = function(arr) {
    arr.sort((a, b) => a - b);
    arr.reverse();
    
    let max = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] < arr[i + 1] + arr[i + 2]) {
            max = Math.max(max, arr[i] + arr[i + 1] + arr[i + 2]);
            break;
        };;
    };
    return max;
};