// A1 — fix it two different ways (they're both on today's cards):
// const player = {
//     name: "Oscar",
//     hp: 100,
//     status() {
//         console.log(`${this.name}: ${this.hp} hp`);
//     },
// };
// const s = player.status;
// s();   // intended: "Oscar: 100 hp"
// My prediction: "undefined: undefined hp"
// Because: status is a function-function, and it's called with nothing to the left of the dot.
// After running: Prediction correct.

// A1 fixed two ways:
const player_a = {
    name: "Oscar",
    hp: 100,
    status() {
        console.log(`${this.name}: ${this.hp} hp`);
    },
};
player_a.status(); // expect: Oscar: 100hp

const player_b = {
    name: "Oscar",
    hp: 100,
    status() {
        console.log(`${this.name}: ${this.hp} hp`);
    },
};
const s = player_b.status.bind(player_b);
s(); // expect: Oscar: 100hp

// After fix: I'm not sure these are the two answers you were looking for, but they work. Happy to use other techniques on
// request.

// ***********************************
// A2 — one-line fix:
// const cart = {
//     items: 3,
//     report: () => console.log(`${this.items} items in cart`),
// };
// cart.report();   // intended: "3 items in cart"
// My prediction: "undefined items in cart"
// Because: The arrow-function isn't enclosed by any function-function, so it falls back to the Global scope, where Global.items 
// is (presumably) undefined.
// After running: Prediction correct.

// A2 fix
const cart_a = {
    items: 3,
    report() {console.log(`${this.items} items in cart`) },
};
cart_a.report();   // intended: "3 items in cart"

// After fix: MDN says that arrow-functions can't be used as methods at all, so the only fix I could come up with was to use a
// traditional function. Was that right?

// ***********************************
// A3 — fix two different ways (one modern, one legacy-style — you met both today), and make it stop by itself after exactly 3 ticks:
// const game = {
//     score: 0,
//     start() {
//         setInterval(function () {
//             this.score++;
//             console.log(`score: ${this.score}`);
//         }, 300);
//     },
// };
// game.start();   // intended: score: 1 / score: 2 / score: 3, then the program exits
// Thinking: Well, setInterval is executing an anonymous function-function, and that's the equivalent of calling it with
// nothing to the left of the dot.
// My prediction: score: undefined, repeating forever.
// After running: It was actually score: NaN. I guess that makes sense though I didn't know about it. this.score is undefined,
// the function tries to increment it so its value becomes NaN (?), and that's what it prints.

const game_a = {
    score: 0,
    t: 0,
    start() {
        this.t = setTimeout(() => {
            this.score++;
            console.log(`score: ${this.score}`);

            if (this.score < 3) this.start();
        }, 300);
    },
};
game_a.start(); // expect: score: 1 / score: 2 / score: 3

const game_b = {
    score: 0,
    t: 0,
    start() {
        const self = this;

        this.t = setTimeout(function () {
            self.score++;
            console.log(`score: ${self.score}`);

            if (self.score < 3) self.start();
        }, 300);
    },
};
game_b.start(); // expect: score: 1 / score: 2 / score: 3

// After fix: Don't be alarmed that the output from both versions overlaps as they run async together.
