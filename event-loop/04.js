Promise.resolve()
    .then(() => console.log("1"))
    .then(() => console.log("2"))
    .then(() => console.log("3"));
queueMicrotask(() => console.log("4"));
Promise.resolve().then(() => console.log("5"));
setTimeout(() => console.log("6"), 0);
console.log("7");

