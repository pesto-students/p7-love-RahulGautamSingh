// Next Greater Element

function nextGreaterElem(arr) {
    let res = [-1], n = arr.length;
    let maxArr = [arr[n - 1]], maIndex = 0;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            while (arr[i] > maxArr[maIndex]) { maIndex--; maxArr.pop(); }
            if (maIndex < 0) res.push(-1);
            else res.push(maxArr[maIndex]);
        } else {
            res.push(arr[i + 1]);
            maxArr.push(arr[i + 1]);
            maIndex++;
        }
    }
    return res.reverse();
}

console.log(nextGreaterElem([10, 1, 2, 3, 11]))