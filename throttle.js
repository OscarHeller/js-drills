function throttle(fn, ms) {
    let last = 0;

    return function(...args) {
        const now = Date.now();

        if (now - last > ms) {
            last = now;
            fn(...args);
        }
    };
}

const t = throttle((msg) => console.log(msg), 500);

t("first"); // expect "first"
t("second"); // expect nothing

setTimeout(() => t("third"), 600); // expect "third"