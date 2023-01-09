// spiral matrix
// TimeComplexity: O(m*n)
function spiral(matrix) {
    if (!matrix.length) return [];
    let row_0 = 0, row_n = matrix.length, col_0 = 0, col_n = matrix[0].length, spiral_arr = [];

    while (row_0 < row_n && col_0 < col_n) {
        // print first row
        for (let i = col_0; i < col_n; i++) spiral_arr.push(matrix[row_0][i]);
        row_0++;

        // print last col
        for (let i = row_0; i < row_n; i++) spiral_arr.push(matrix[i][col_n - 1]);
        col_n--;

        // print last row
        for (let i = col_n - 1; i >= col_0; i--) spiral_arr.push(matrix[row_n - 1][i]);
        row_n--;

        // print first col
        for (let i = row_n - 1; i >= row_0; i--) spiral_arr.push(matrix[i][col_0]);
        col_0++;
    }

    return spiral_arr;
}

console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));