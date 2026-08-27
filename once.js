function once(fn) {
    let return_value;
    let runnable = true;

    return function(...args) {
        if (runnable) {
            runnable = false
            return_value = fn(...args)
        }

        return return_value
    }
}

const o = once(Math.random);

console.log(o());
console.log(o());