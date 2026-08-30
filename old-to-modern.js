// Rewrite each in modern JS. Behavior must be verified by running both versions — with one deliberate exception in B2, see its note.

// B1:
const users = [
    { name: "Ana", plan: null },
    { name: "Ben", plan: { tier: "pro" } },
];
const labels = users.map(u => {
    const { name, plan } = u;
    const tier = plan?.tier ?? "free";
    
    return `${name} (${tier})`;
});
console.log(labels); // expect: [ 'Ana (free)', 'Ben (pro)' ]

// B2: — rewrite, then add a comment answering: for the exact call shown,
// does your modern version behave differently than the ES5 one? Which behavior is correct, and why?
function schedule(fn, delay = 500) {
    setTimeout(fn, delay); // Moved it to one line just for fun.
}
schedule(function () { console.log("ran"); }, 0); // expect ran (after 0ms)
// delay || 500 causes a bug specifically with 0, which is falsy, so a timeout of 0 gets set to 500 (c100). ?? only triggers 
// for undefined or null. The new behavior is correct.
// Update: Changed it to a default parameter. Now delay = null will not wait.

// B3:
function describe(post) {
    const { title, author: { name: authorName } } = post;
    console.log(`${title} by ${authorName}`);
}
describe({ title: "Grid", author: { name: "Ana" } }); // expect: Grid by Ana

// B4:
const [ year, month, day ] = "2026-08-30".split("-");
console.log(`${day}/${month}/${year}`); // expect: 30/08/2026

// Note: I forgot and had to consult MDN that { } was just to destructure an object, and that I needed [ ] for an array.
