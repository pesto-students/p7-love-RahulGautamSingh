// Detect loop in a linked list

/* 
node = {
 val: 2,
 node: anotherNode;
}
 if node===Null && val!==Null it means that the node is a endNode
*/

// to detect a loop we will add a visited field to the node and assign true if we have been through the node once else it is undefined


function detectLoopInLL(head) {
    let curr = head;
    while (curr !== null) {
        if (curr.visited) return "Loop exists."
        else {
            curr.visited = true;
            curr = curr.node;
        }
    }

    return "Loop doesn't exist."
}


let a = {
    val: 1,
    node: {
        val: 2,
        node: {
            val: 3,
            node: null
        }
    }
}
console.log(detectLoopInLL(a)) // loop does not exist
a.node.node.node = a;
console.log(detectLoopInLL(a)) // loop exists