//  Reverse the Linked list

/* 
node = {
 val: 2,
 node: anotherNode;
}
 if node===Null && val!==Null it means that the node is a endNode
*/
function reverseLL(head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.node;
        curr.node = prev;
        prev = curr;
        curr = next;
    }


    head = prev;
    return head;
}

console.log(reverseLL({
    val: 1,
    node: {
        val: 2,
        node: {
            val: 3,
            node: null
        }
    }
}))