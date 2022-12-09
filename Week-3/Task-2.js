function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

function sayHelloTo(name) {
    return greet('Hello', name);
}

function sayHiTo(name) {
    return greet('Hi', name);
}

// Using call
console.log(greet.call(null, 'Hello', 'John'));

// Using bind
const sayHelloToJohn = greet.bind(null, 'Hello', 'John');
console.log(sayHelloToJohn());

// Using apply
console.log(greet.apply(null, ['Hello', 'John']));
