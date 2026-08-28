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
console.log(c.increment()); // Expect 1
console.log(c.increment()); // Expect 2
console.log(c.decrement()); // Expect 1
console.log(c.reset()); // Expect 0