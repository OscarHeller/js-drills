function makeCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter += 1;
            return counter;
        },
        decrement: function() {
            counter -= 1;
            return counter;
        },
        reset: function() {
            counter = 0;
            return counter;
        }
    }
}

const c = makeCounter();
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.reset());