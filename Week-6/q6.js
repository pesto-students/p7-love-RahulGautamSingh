// 3 sum
// Time Complexity: O(n^2)

function cmp(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}

function sum3(arr, target) {
    arr = arr.sort(cmp);
    let n = arr.length, closestSum = -Infinity;
    for (let i = 0; i < n; i++) {
        let left = i + 1, right = n - 1;
        while (left < right) {
            let currSum = arr[i] + arr[left] + arr[right];
            if (currSum === target) return currSum;
            if (Math.abs(currSum - target) < Math.abs(closestSum - target)) closestSum = currSum;
            else if (currSum < target) left++;
            else right--;
        }
    }
    return closestSum;
}

console.log(sum3([-1, 2, 1, -4], 1))

