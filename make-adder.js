function makeAdder(addAmount) {
    return function(startingNum) {
        return startingNum + addAmount;
    }
}

const add3 = makeAdder(3);
const add100 = makeAdder(100);

console.log(add3(4)); // Expect 7
console.log(add100(45)); // Expect 145