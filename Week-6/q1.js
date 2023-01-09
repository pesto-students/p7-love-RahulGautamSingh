// Max Sum Contiguous Subarray - Kadane's Algo
// TimeComplexity: O(n)

function kadane(arr) {
    let localSum = 0, globalSum = -Infinity, n = arr.length;
    for (let i = 0; i < n; i++) {
        localSum = Math.max(arr[i], localSum + arr[i]);
        globalSum = Math.max(globalSum, localSum);
    }

    return globalSum;
}

console.log(kadane([1, 2, 3, 4, -10]))