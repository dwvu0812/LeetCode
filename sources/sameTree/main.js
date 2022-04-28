var isSameTree = function(p, q) {
    if (!q && !p) return true;
    if (!q || !p || q.val !== p.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};