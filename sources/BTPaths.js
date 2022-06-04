var binaryTreePaths = function(root) {
    if (root == null) {
        return [];
    }
    else if (root.left == null && root.right == null) {
        return [root.val.toString()];
    } else {
        let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
        let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
        return [...left, ...right];
    }
};