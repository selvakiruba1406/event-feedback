// Named Exports
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Default Export
export default function greet(name) {
    console.log(`Hello, ${name}! Welcome to ES6 Modules.`);
}
