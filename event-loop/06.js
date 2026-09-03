function shout(word) {
    console.log(word.toUpperCase());
}
setTimeout(shout, 0, "later");
Promise.resolve().then(() => shout("micro"));
setTimeout(() => shout("wrapped"), 0);
setTimeout(shout("now"), 0);
console.log("done");

// Expect:

// NOW
// TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
