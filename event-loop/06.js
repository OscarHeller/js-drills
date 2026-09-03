function shout(word) {
    console.log(word.toUpperCase());
}
setTimeout(shout, 0, "later");
Promise.resolve().then(() => shout("micro"));
setTimeout(() => shout("wrapped"), 0);
setTimeout(shout("now"), 0);
console.log("done");
