var nextGreaterElement = function(nums1, nums2) {
	const map = {};
	const stack = [];
    
    console.log('nums1:', nums1);
    console.log('nums2:', nums2);
	
	// for every n in nums2, fill the stack starting at n, and ending with (but not pushing) the first number in nums2 (after n) that is >= n (or > since all numbers are unique)
	// once a number is found that passes this conditition, add it to a hashmap as a value, with its key being the top of the stack (aka a value found earlier in nums2)
	// this map has "next largest element below it in nums2" as keys, and the "next greater elements" as the values
	nums2.forEach(n => {
        console.log('n:', n);
        
		while (stack.length > 0 && stack[stack.length - 1] < n) {
			map[stack.pop()] = n;
            console.log('map:', map);
		}
		stack.push(n);
        
        console.log('stack:', stack);
	});
	
	return nums1.map(n => map[n] || -1);
};

let nums1 = [1,6,4];
let nums2 = [7,2,4,1,8,5,6];

console.log(nextGreaterElement(nums1, nums2));

