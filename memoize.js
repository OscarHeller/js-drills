// A function that's visibly expensive — it announces when it actually runs:
function slowSquare(n) {
  console.log("computing for", n);
  return n * n;
}

function memoize(fn) { // fn only takes a single arg per the spec
  let cache = {};

  return function(arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      let result = fn(arg);
      cache[arg] = result
      return result;
    }
  }
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4));  // logs "computing for 4", expect: 16
console.log(fastSquare(4));  // logs NOTHING, expect: 16  ← the whole point
console.log(fastSquare(5));  // logs "computing for 5", expect: 25
console.log(fastSquare(4));  // still nothing, expect: 16