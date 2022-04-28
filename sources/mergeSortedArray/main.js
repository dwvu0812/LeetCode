var merge = function(nums1, m, nums2, n) {
    let tail1 = m - 1, 
        tail2 = n - 1, 
        finished = m + n - 1;
    while (tail1 >= 0 && tail2 >= 0) {
        nums1[finished--] = (nums1[tail1] > nums2[tail2]) ? nums1[tail1--] : nums2[tail2--];
    }
    while (tail2 >= 0) {
        nums1[finished--] = nums2[tail2--];
    }
};