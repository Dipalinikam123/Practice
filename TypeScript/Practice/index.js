console.log("hello Typescript");
var num = 5;
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
var pointPart = {
    x: 10
};
console.log(pointPart);
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
// -----------------------------
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
var nameAgeMaps = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMaps);
var bob1 = {
    name: 'Bob',
    // location:"surat"
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob1);
var bob2 = {
    //   name: 'Bob',
    age: 22,
    //   location:"surat"
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob2);
var values = 11;
// const values: Exclude<Primitive, string> = 'djhlcvdvnj'; //invalid
// const values: Exclude<Primitive, string> = true;  valid
// a string cannot be used here since Exclude removed it from the type.
console.log(typeof values);
var point = {
    x: 10,
    y: 20
};
var generateNumber = function () {
    return 42;
};
var result = generateNumber();
console.log(result); // Output: 42
var points = {
    x: 10,
    y: '10',
};
console.log(points);
var persone = {
    name: "Dylan",
    age: 35,
};
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house === null || house === void 0 ? void 0 : house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500,
    yard: {
        sqft: 400
    }
};
printYardSize(home); // Prints 'No yard'
//   ---------------------------
// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
//   printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
