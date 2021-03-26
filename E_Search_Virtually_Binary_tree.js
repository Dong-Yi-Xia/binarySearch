// Search in a Virtually Complete Binary Tree
// Consider a complete binary tree of n nodes whose values are 1 to n. 
// The root has value of 1, its left child is 2 and its right child is 3. In 
// general, nodes' values are labelled 1 to n in level order traversal.

// You are given a binary tree root and an integer target. Given that the root
//  was originally a complete binary tree whose values were labelled as described above, 
//  and that some of the subtrees were deleted, return whether target exists in root.

// Bonus: solve in \mathcal{O}(h)O(h) time where h is the height of the tree.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the number of nodes in root
// Example 1
// Input
// Visualize
// root =
// 1

// 2

// 3

// 4

// 6

// 7

// target = 6
// Output
// true
// Explanation
// 6 exists in this tree.


/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root, target) {
        console.log(root)
        if (root === null) {
            return false;
        }
        if (root.val === target) {
            return true;
        }
        
        return this.solve(root.left, target) || this.solve(root.right, target)
    }
}

