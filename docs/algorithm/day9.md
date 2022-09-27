# day 9

## 层序遍历二叉树

[107. 二叉树的层序遍历 II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

```java
public class Q1 {
    /**
     * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.
     * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
     */

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        public TreeNode(int val) {
            this.val = val;
        }
    }

    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> ans = new LinkedList<>();
        if (root == null) return ans;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> curAns = new LinkedList<>();
            for (int i = 0; i < size; i++) {
                TreeNode temp = queue.poll();
                if (temp.left != null) queue.add(temp.left);
                if (temp.right != null) queue.add(temp.right);
                curAns.add(temp.val);
            }
            ans.add(0, curAns);
        }
        return ans;
    }
}
```

## 验证二叉搜索树

有效BST(Binary Search Tree)的判定条件
- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

[98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

```java
public class Q2 {
    /**
     * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
     * https://leetcode.cn/problems/validate-binary-search-tree/
     */

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        public TreeNode(int val) {
            this.val = val;
        }
    }

    private static class Info {
        boolean isBST;
        int max;
        int min;

        public Info(boolean isBST, int max, int min) {
            this.isBST = isBST;
            this.max = max;
            this.min = min;
        }
    }

    private Info process(TreeNode root) {
        if (root == null) return null;
        Info leftInfo = process(root.left);
        Info rightInfo = process(root.right);
        int min = root.val;
        int max = root.val;
        if (leftInfo != null) {
            min = Math.min(min, leftInfo.min);
            max = Math.max(max, leftInfo.max);
        }
        if (rightInfo != null) {
            min = Math.min(min, rightInfo.min);
            max = Math.max(max, rightInfo.max);
        }
        boolean isBst = false;
        boolean leftIsBst = leftInfo == null || leftInfo.isBST;
        boolean rightIsBst = rightInfo == null || rightInfo.isBST;
        boolean leftMaxLessX = leftInfo == null || root.val > leftInfo.max;
        boolean rightMinBiggerX = rightInfo == null || root.val < rightInfo.min;
        isBst = leftIsBst && rightIsBst && leftMaxLessX && rightMinBiggerX;

        return new Info(isBst, max, min);
    }

    public boolean isValidBST(TreeNode root) {
        return process(root).isBST;
    }
}
```

## 路径总和

[112. 路径总和](https://leetcode.cn/problems/path-sum/)

```java
public class Q3 {
    /**
     * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
     * https://leetcode.cn/problems/path-sum/
     */

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    private boolean flag = false;

    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        process(root, 0, targetSum);
        return flag;
    }

    private void process(TreeNode node, int preSum, int targetSum) {
        if (node.left == null && node.right == null) {
            if (preSum + node.val == targetSum) this.flag =true;
            return;
        }
        preSum += node.val;

        if (node.left != null) process(node.left, preSum, targetSum);
        if (node.right != null) process(node.right, preSum, targetSum);
    }
}
```

## 路径总和 II

[路径总和 II](https://leetcode.cn/problems/path-sum-ii/)

```java
public class Q4 {
    /**
     * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.
     * https://leetcode.cn/problems/path-sum-ii/
     */

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }

    private List<List<Integer>> ans = new ArrayList<>();

    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        if (root == null) return ans;
        process(root, new ArrayList<>(), 0, targetSum);
        return ans;
    }

    private void process(TreeNode node, List<Integer> prePath, int preSum, int targetSum) {
        prePath = new ArrayList<>(prePath);
        prePath.add(node.val);
        preSum += node.val;
        if (node.left == null && node.right == null) {
            if (preSum == targetSum) {
                ans.add(prePath);
            }
            return;
        }
        if (node.left != null) process(node.left, prePath, preSum, targetSum);
        if (node.right != null) process(node.right, prePath, preSum, targetSum);
    }
}
```