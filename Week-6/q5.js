// pair with given difference

// first sort the use  2 pointer approach
// TimeComplexity: O(nlogn)

function cmp(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}

function pairWithGivenDiff(arr, diff) {
    arr = arr.sort(cmp);
    let left = 0, right = 1, n = arr.length;

    while (left < right && right < n) {
        const currDiff = arr[right] - arr[left]
        if (currDiff === diff) return 1;
        else if (currDiff > diff) {
            if (left + 1 < n) left++;
            else return 0;
        }
        else if (currDiff < diff) {
            if (right + 1 < n) right++;
            else return 0;
        }
    }

    return 0;
}

console.log(pairWithGivenDiff([-10, 20], 10))
