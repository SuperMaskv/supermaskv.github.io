# day 8

## 遍历二叉树

```java
public class Q1 {
    /**
     * traverse a binary tree
     */

    private static class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;
    }

    private static void traverse(TreeNode root) {
        if (root == null) return;
        // do preorder traverse here
        traverse(root.left);
        // do middle order traverse here
        traverse(root.right);
        // do postorder traverse here
    }
}
```

## 判断两棵二叉树是否相等

[相同的树](https://leetcode.cn/problems/same-tree/submissions/)

```java
public class Q2 {
    /**
     * check if two binary trees are same or not
     * https://leetcode.cn/problems/same-tree/submissions/
     */

    private static class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;
    }

    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null ^ q == null) return false;
        if (p == null) return true;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```

## 判断二叉树是否为对称

[对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

```java
public class Q3 {
    /**
     * check if a binary tree is symmetric tree
     * https://leetcode.cn/problems/symmetric-tree/
     */
    private static class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;
    }

    public boolean isSymmetric(TreeNode root) {
        return checkSymmetric(root, root);
    }

    public boolean checkSymmetric(TreeNode left, TreeNode right) {
        if (left == null ^ right == null) return false;
        if (left == null) return true;
        return left.val == right.val && checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
    }
}
```

## 求二叉树最大深度

[二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

```java
public class Q4 {
    /**
     * get depth of a binary tree
     * https://leetcode.cn/problems/maximum-depth-of-binary-tree
     */

    private static class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;
    }

    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```


## 根据先序遍历和中序遍历还原二叉树

[从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

```java
public class Q5 {
    /**
     * rebuild a binary tree from preorder traversal and middle order traversal
     * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
     */
    private static class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int val) {
            this.val = val;
        }
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    }

    private TreeNode build(int[] preorder, int preL, int preR, int[] inorder, int inL, int inR) {
        if (preL > preR || inL>inR) return null;
        TreeNode node = new TreeNode(preorder[preL]);
        if (preL == preR) return node;
        int find = inL;
        for(;inorder[find] != preorder[preL];find++);
        node.left = build(preorder,preL + 1,preL + 1 + find - inL - 1,inorder,inL,find - 1);
        node.right = build(preorder, preL + find - inL + 1, preR, inorder, find + 1, inR);
        return node;
    }
}
```