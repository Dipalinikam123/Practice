console.log("hello Typescript");

let num: number = 5;

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

function addition(a:number, b:number):number { // param a must be number, param b and function also must be number, because function returns number
    return a + b;
}

console.log("----typescript fun", addition(10, 10));
