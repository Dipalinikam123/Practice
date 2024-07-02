"use strict";
console.log("hello Typescript");
let num = 5;
num = 55;
console.log("--a---", num);
// --------------------------------------------------------------------------------------------------
//@ts-ignore
// simple fun
function sum(x, y) {
    return x + y;
}
console.log("----simple fun", sum(10, 5));
// console.log("----simple fun", sum(10, "purvi")); //-------in javascript we can assign string to number
// In TypeScript
function addition(a, b) {
    return a + b;
}
console.log("----typescript fun", addition(10, 10));
