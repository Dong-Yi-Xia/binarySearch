// Linked List Deletion
// Given a singly linked list node, and an integer target, return the same linked list with all 
// nodes whose value is target removed.

// Constraints

// n ≤ 100,000 where n is the number of nodes in node
// Example 1
// Input
// Visualize
// node = 0 1 1 2
// target = 1

// Output = 0 2


/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */

class Solution {
    solve(node, target) {
        let ans = new LLNode(0,node)
        let cur = ans
        
        while(cur.next){
            if(cur.next.val == target){
                cur.next = cur.next.next
            }else{
                cur = cur.next
            }
        }
        return ans.next
    }
}