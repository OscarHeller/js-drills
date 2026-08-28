function throttle(fn, ms) {
    let t = 0;

    return function(...args) {
        let now = Date.now();

        if (now - t > ms) {
            t = now;
            fn(...args);
        }
    };
}

const t = throttle((msg) => console.log(msg), 500);

t("howdy") // expect "howdy"
t("howdy") // expect nothing