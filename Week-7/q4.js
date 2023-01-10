// Parenthesis Checker

function parenthesisChecker(str) {
    let stack = [str[0]], n = str.length;
    let stackIndex = 0;

    for (let i = 1; i < n; i++) {
        if (str[i] === '}' && stack[stackIndex] === '{') { stack.pop(); stackIndex--; }
        else if (str[i] === ')' && stack[stackIndex] === '(') { stack.pop(); stackIndex--; }
        else if (str[i] === ']' && stack[stackIndex] === '[') { stack.pop(); stackIndex--; }
        else { stack.push(str[i]); stackIndex++; }
    }

    return stack.length === 0;
}

console.log(parenthesisChecker('{([])}')) // true
console.log(parenthesisChecker('()')) // true
console.log(parenthesisChecker('([]')) // false
