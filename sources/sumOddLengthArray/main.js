var sumOddLengthSubarrays = function(arr) {
    let N = arr.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        let total = i * (N - i) + (N - i);
        sum += Math.ceil(total/2) * arr[i];
    }
    return sum;
};