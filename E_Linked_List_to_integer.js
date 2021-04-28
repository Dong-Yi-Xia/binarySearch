// Linked List to Integer
// Given a single linked list node, representing a binary number with 
// most significant digits first, return it as an integer.

// Constraints

// n ≤ 30 where n the number of nodes in node
// Example 1
// Input
// Visualize
// node = 1 0 0 
// Output
// 4
// Explanation
// The linked list represented 100 in binary.

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node) {
        let numStr = ''
        while(node){
            numStr += node.val
            node = node.next
        }
        return parseInt(numStr,2)
    }
}