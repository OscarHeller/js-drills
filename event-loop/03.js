const start = Date.now();
const t = () => Date.now() - start;
setTimeout(() => console.log(`A @${t()}ms`), 40);
setTimeout(() => console.log(`B @${t()}ms`), 20);
Promise.resolve().then(() => {
    const s = Date.now();
    while (Date.now() - s < 30) {}
    console.log(`C @${t()}ms`);
});
console.log(`D @${t()}ms`);
