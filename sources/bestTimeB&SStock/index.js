// var maxProfit = function(prices) {
//     let minIndex = prices.indexOf(Math.min(...prices))
//     let len = prices.length;
//     let max = 0;

//     if (minIndex === len-1) {
//         return 0;
//     } else {
//         for (let i = minIndex + 1; i < len; i++) {
//             if (max  < prices[i] - prices[minIndex]) {
//                 max = prices[i] - prices[minIndex];
//             }
//         }
//     }
//     console.log(max);
//     return max;
// };

// let prices = [7,1,5,3,6,4];
// let prices2 = [7,6,4,3,1];

// maxProfit(prices2);

const maxProfit = (prices) => {
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = prices[right] - prices[left];
            max = Math.max(max, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max;
}