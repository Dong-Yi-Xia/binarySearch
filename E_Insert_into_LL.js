// Insert Into Linked List
// You are given a singly linked list head as well as integers pos and val. 
// Insert a new node with value val before index pos of head.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the number of nodes in head
// 0 ≤ pos ≤ n
// Example 1
// Input
// Visualize
// head = [1, 3, 5, 7]
// pos = 2
// val = 9
// Output
// Visualize
// [1, 3, 9, 5, 7]

// Example 2
// Input
// Visualize
// head = [1]
// pos = 0
// val = 3
// Output
// Visualize
// [3, 1]

// Example 3
// Input
// Visualize
// head = [2]
// pos = 1
// val = 5
// Output
// Visualize
// [2, 5]


/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(head, pos, val) {
        let arr = []
        while(head){
            arr.push(head.val)
            head = head.next
        }
        arr.splice(pos,0,val)

        let newHead = new LLNode() 
        let cur = newHead
        for(let i = 0; i<arr.length; i++){
            let n = new LLNode(arr[i])
            cur.next = n
            cur = n 
        }
        return newHead.next
    }
}


class Solution {
    solve(head, pos, val) {
        let cur = head
        let position = 0
        let newNode = new LLNode(val)
        if(pos === 0){
            // newNode.next = head
            // return newNode
            return new LLNode(val, head)
        }
        while(cur){
            if(position + 1 === pos){
                let temp = cur.next 
                cur.next = newNode
                newNode.next = temp
            }
            cur = cur.next
            position++
        }
        return head
    }
}