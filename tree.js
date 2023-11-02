/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        let result = 0
        let stack = [this.root]

        while (stack.length) {
            let current = stack.pop()

            if (current === null) return result 

            result += current.val

            for (let child of current.children) stack.push(child)
        }

        return result
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        let result = 0
        let stack = [this.root]

        while (stack.length) {
            let current = stack.pop()

            if (current === null) return result 

            if (current.val % 2 === 0) result ++

            for (let child of current.children) stack.push(child)
        }

        return result
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        let result = 0
        let stack = [this.root]

        while (stack.length) {
            let current = stack.pop()

            if (current === null) return result 

            if (current.val > lowerBound) result ++

            for (let child of current.children) stack.push(child)
        }

        return result
    }
}

module.exports = { Tree, TreeNode };
