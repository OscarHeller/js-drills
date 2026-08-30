// Rewrite each in modern JS. Behavior must be verified by running both versions — with one deliberate exception in B2, see its note.

// B1:
var users = [
    { name: "Ana", plan: null },
    { name: "Ben", plan: { tier: "pro" } },
];
var labels = users.map(function (u) {
    const tier = u?.plan?.tier ?? "free";
    return `${u.name} (${tier})`
});
console.log(labels); // expect: [ 'Ana (free)', 'Ben (pro)' ]

// B2: — rewrite, then add a comment answering: for the exact call shown,
// does your modern version behave differently than the ES5 one? Which behavior is correct, and why?
function schedule(fn, delay) {
    setTimeout(fn, delay ?? 500); // Moved it to one line just for fun.
}
schedule(function () { console.log("ran"); }, 0); // expect ran (after 0ms)
// delay || 500 causes a bug specifically with 0, which is falsy, so a timeout of 0 gets set to 500 (c100). ?? only triggers 
// for false, undefined, or null (c70). The new behavior is correct.

// B3:
function describe(post) {
    console.log(`${post.title} by ${post.author.name}`);
}
describe({ title: "Grid", author: { name: "Ana" } }); // expect: Grid by Ana

// B4:
const [ year, month, day ] = "2026-08-30".split("-");
console.log(`${day}/${month}/${year}`); // expect: 30/08/2026

// Note: I forgot and had to consult MDN that { } was just to destructure an object, and that I needed [ ] for an array.
