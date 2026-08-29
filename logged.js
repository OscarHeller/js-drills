function add(a, b) { return a + b; }

function logged(fn) {
    return function(...args) {
        console.log(`called with: ${args}`);

        const result = fn(...args);

        console.log(`returned: ${result}`);

        return result;
    };
}

const loggedAdd = logged(add);

const sum = loggedAdd(2, 3);
// console shows:
//   called with: 2,3
//   returned: 5
console.log(sum); // expect: 5 - the wrapper still returns the real result