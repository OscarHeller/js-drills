const start = Date.now();
const t = () => Date.now() - start;
let ticks = 0;
const id = setInterval(() => {
    ticks++;
    console.log(`tick ${ticks} @${t()}ms`);
    if (ticks == 3) clearInterval(id);
}, 100);
setTimeout(() => console.log(`timeout @${t()}ms`), 0);
console.log(`sync @${t()}ms`);
