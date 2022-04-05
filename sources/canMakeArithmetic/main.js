avar canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];
    let result = true;
    let len = arr.length;
    for (let i = 0; i < len -1; i++ ) {
        if (arr[i+1] - arr[i] != diff) {
            result = false;
        }
    }
    return result;
};