/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth(root) {
        if (root == null) return 0

        let leftDepth = this.minDepth(root.left)
        let rightDepth = this.minDepth(root.right)

        return Math.min(leftDepth, rightDepth) + 1
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth(root) {
        if (root == null) return 0

        let leftDepth = this.maxDepth(root.left)
        let rightDepth = this.maxDepth(root.right)

        return Math.max(leftDepth, rightDepth) + 1
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum(root) {
        if (!root) return 0

        let max = -Infinity
        getMaxSum(root)
        return max

        function getMaxSum(node) {
            if (!node) return 0

            let leftSum = getMaxSum(node.left)
            let rightSum = getMaxSum(node.right)
            max = Math.max(max, Math.abs(node.val) + leftSum + rightSum)

            return Math.max(0, Math.abs(node.val) + leftSum, Math.abs(node.val) + rightSum)
        }
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(root, lowerBound) {
        if (!root) return null

        let result = Infinity
        compare(root)

        if (result == Infinity) {
            return null
        } 

        return result

        function compare(node) {
            if (node.left) compare(node.left)
            if (node.right) compare(node.right)
            
            if (node.val > lowerBound && ((result - lowerBound) > (node.val - lowerBound))) {
                result = node.val
            }
        }
    }

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {

    }

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize() {

    }

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize() {

    }

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {
        
    }
}

module.exports = { BinaryTree, BinaryTreeNode };
