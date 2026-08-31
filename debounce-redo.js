const debounce = (fn, delay) => {
    let t;

    return (...args) => {
        clearTimeout(t);

        t = setTimeout(() => fn(...args), delay);
    };
};

const print = (msg) => {
    console.log(`Printing "${msg}"`);
};

const debouncedPrint = debounce(print, 100);

debouncedPrint("0");
setTimeout(() => debouncedPrint("1"), 50);
setTimeout(() => debouncedPrint("2"), 100);
setTimeout(() => debouncedPrint("3"), 150);
setTimeout(() => debouncedPrint("4"), 200);
setTimeout(() => debouncedPrint("5"), 250);
setTimeout(() => debouncedPrint("6"), 400);

// Expect:
// Printing "5"
// Printing "6"

// Pre-predictions: 
// 0 (0ms)
// 6 (400ms)

// I'm chasing a "Set A" bug in my setTimeout code. No memory of what that was. It
// might have been failing to wrap in an arrow function. What I have looks right. I
// don't need to capture the output timeout IDs because I'm not using them.

// Post-run:
// I was wrong - and I forgot how debounce worked. It actually printed 5 and 6. Which makes
// sense now that I think about it. The timeout keeps getting reset until delay passes, which
// is 5 (at 350ms). Then, at 400ms, 6 starts, is not reset, and prints at 500ms.
