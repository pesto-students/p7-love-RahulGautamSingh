// sort array of 0's and 1's

// TimeComplexity: O(n)
function custom_sort(arr) {
    // store 2 indexes
    // a -> last 0's position
    // b -> first 2's position
    let a = -1, n = arr.length, b = n;

    for (let i = 0; i < b; i++) {
        if (arr[i] === 0) {
            // move it after the last 0
            let temp = arr[a + 1];
            arr[a + 1] = 0;
            arr[i] = temp;
            a++;
        }
        else if (arr[i] === 2) {
            // move it before the first 2
            let temp = arr[b - 1];
            arr[b - 1] = 2;
            arr[i] = temp;
            b--;
        }
    }
    return arr;
}

console.log(custom_sort([0, 1, 0]))