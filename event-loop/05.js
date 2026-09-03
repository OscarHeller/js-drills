for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var", i), 0);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let", j), 0);
}
Promise.resolve().then(() => console.log("micro"));
console.log("sync", i);

// Expect:

// sync 3
// micro
// var 3
// var 3
// var 3
// let 0
// let 1
// let 2
