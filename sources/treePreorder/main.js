var preorder = function(root, ans=[]) {
    if (!root) return ans
    ans.push(root.val)
    console.log(ans)
    
    for (let child of root.children)
        preorder(child, ans)
    return ans
};

let root = [1,null,3,2,4,null,5,6]

console.log(preorder(root))
