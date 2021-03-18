A Strictly Increasing Linked List
Given the head of a singly linked list head, return whether the values of the nodes are 
sorted in a strictly increasing order.

Constraints

n ≤ 100,000 where n is the number of nodes in head
Example 1
Input
Visualize
head = 1 5 9 9 

Output
false

Explanation
Even though this list is sorted, it's not strictly increasing since 9 is repeated.

Example 2
Input
Visualize
head = 1 5 8 9 

Output
true

Explanation
The values 1, 5, 8, 9 are strictly increasing.

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(head) {
        let curNode = head
        let nextNode = curNode.next
        while(curNode && nextNode !== null){
            if(curNode.val < nextNode.val){
                curNode = nextNode
                nextNode = curNode.next
            } else{
                return false
            }
        }
        return true
    }
}