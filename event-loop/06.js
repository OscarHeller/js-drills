function shout(word) {
    console.log(word.toUpperCase());
}
setTimeout(shout, 0, "later");
Promise.resolve().then(() => shout("micro"));
setTimeout(() => shout("wrapped"), 0);
setTimeout(shout("now"), 0);
console.log("done");

// Expect:

// NOW
// node:internal/errors:546
//       throw error;
//       ^

// TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
//     at setTimeout (node:timers:116:3)
//     at Object.<anonymous> (/home/oscar/job/js-drills/event-loop/06.js:7:1)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1892:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47 {
//   code: 'ERR_INVALID_ARG_TYPE'
// }
