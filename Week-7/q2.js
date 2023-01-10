//  Rotate Linked List

/* 
node = {
 val: 2,
 node: anotherNode;
}
 if node===Null && val!==Null it means that the node is a endNode
*/
function rotateLL(head, k) {
    let curr = head;
    let x = head, n = 1;
    while (x.node !== null) { x = x.node; n++; }

    let end = x;
    let prev = end;
    console.log(n);
    k = k % n;
    if (k === n || k === 0) return head;
    let next;
    while (k--) {
        next = curr.node;
        curr.node = null;
        prev.node = curr;
        prev = curr;
        curr = next;
    }


    head = next;
    return head;
}

console.log(rotateLL({
    val: 1,
    node: {
        val: 2,
        node: {
            val: 3,
            node: null
        }
    }
}, 19))