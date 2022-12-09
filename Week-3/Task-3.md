```code
function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }
    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
```

## Ans
```Coount is 0```

## Explanation
`createIncrement` function is invoked in line 17 and the `increment` and `log` functions are assigned the functions returned from it with the same names. During this call only `message` is initialized the value `Count is 0` as the value of `count` at this time is 0.

After this 
1. we call `increment()` 3 times which results in the increment of the value of `count` variable from 0 to 3
2. we call `log()`which logs the value of `message` to the console

The logged variable is `message` whose value has not changed from the initial `createIncrement` ie. when `count` was 0, even when the actual `count` variable's value has changed.
