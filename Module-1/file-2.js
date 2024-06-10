const { a, b, add, multi } = require("./file-1");
const { a: a_3, b: b_3, sub, div } = require("./file-3");

console.log("From Files --- 1");
console.log(a);
console.log(b);
console.log(add(4, 5));
console.log(multi(7, 7));
console.log("From Files --- 2");
console.log(a_3);
console.log(b_3);
console.log(sub(4, 5));
console.log(div(7, 7));


/// IIFE ===> Immediately Invoked Function Expression
((name)=>{
    console.log(`Name: ${name}`);
})("saif")