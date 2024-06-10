const EventEmitter = require("node:events");

class MyOwnEmitter extends EventEmitter {}

const myEmitter = new MyOwnEmitter();

myEmitter.on("action", (a, b) => {
  console.log(`I have calculated a + b = ${a + b} as actions`);
});

myEmitter.on("action", () => {
  console.log(`falsy actions`);
});

myEmitter.on("trigger", () => {
  console.log("Enter Button trigger");
});

myEmitter.emit("action", 10, 20);
myEmitter.emit("trigger");
