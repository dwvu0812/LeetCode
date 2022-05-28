function invertTree(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  }