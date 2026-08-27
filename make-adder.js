function makeAdder(add_amount) {
    return function(starting_num) {
        return starting_num + add_amount;
    }
}

const add3 = makeAdder(3);
const add100 = makeAdder(100);

console.log(add3(4));
console.log(add100(45));