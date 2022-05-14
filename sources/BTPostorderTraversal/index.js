var postorderTraversal = function(root) {
    if (!root) return [];

    let result = [];
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();
        result.unshift(node.val);

        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    return result;
};