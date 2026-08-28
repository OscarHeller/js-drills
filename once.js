function once(fn) {
    let returnValue;
    let runnable = true;

    return function(...args) {
        if (runnable) {
            runnable = false
            returnValue = fn(...args)
        }

        return returnValue
    }
}

const o = once(Math.random);

console.log(o());
console.log(o());