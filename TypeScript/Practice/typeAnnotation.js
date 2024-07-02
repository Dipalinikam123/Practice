//----------------------Number----------------------------------------------------------------------------------
// valid
var a = 15;
var b = 3.14;
var c = -5;
var d = NaN;
//  inValid
// let result:number = a + "purvi";
// let result:number="123"
//----------------------String---------------------------------------------------------------------------------
//   any value under single or double quotes are treated as a string
// initialization
var myString = "abcd";
//concatination
var fname = "vaishali";
var lname = 'nikam';
var fullname = fname + lname;
console.log("-----fullname", fullname);
// find length
var str = 'abcdefghijklmnopqr';
var findLength = str.length;
console.log("----length", findLength);
//----------------------boolean----------------------------------------------------------------------------------
var isname1 = true;
var isname2 = false;
var isEven = function (n) {
    return n % 2 === 0;
};
console.log("--boolean fun", isEven(4));
//----------------------BigInt-------------------------------------------------------------------------------------
var maxNum = 9007199254740992n;
console.log("bigint---", maxNum);
//---------------------- any ----------------------------------------------------------------------------------------
var myVar = 5;
myVar = "hello";
myVar = -5;
// --------------------- unknown ------------------------------------------------------------------------------------
//safer than any
var abc;
abc = 5;
abc = "hjkffsdf";
// --------------------- never --------------------------------------------------------------------------------------
// let x: never = true ; // Error: Type 'boolean' is not assignable to type 'never'.,  we can't assign to never
// --------------------- Function ------------------------------------------------------------------------------------
function checkHandler(name, id) {
    console.log("name is ".concat(name, " and id is ").concat(id));
}
checkHandler("purvi", 2);
// -------------
function checkHandler2(palin) {
    // console.log("object",palin);
    var reversedStr = palin.split('').reverse().join('');
    return palin === reversedStr;
}
console.log(checkHandler2("12321"));
// -------------------null and undefined -----------------------------------------------------------------------------
var y = undefined;
console.log(typeof y);
var z = null;
console.log(typeof z);
// ------------------- Array -------------------------------------------------------------------------------------------
var myString1 = [];
myString1.push("hello");
console.log("---myString--", myString1);
var myString2 = ["my", "subject"];
myString2.push("hello");
console.log("---myString--", myString2);
// readonly
var readOnly = ["abcdef"];
//   readOnly.push("hii") //can't modify in readonly variable
console.log("----readonly", readOnly);
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
var head = numbers[0]; // no error
console.log(head);
// --------------------Tuple-----------------------------------------------------------------------------------------------
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log("------ourTuple", ourTuple);
// in incorrect order
// define our tuple
// let ourTuple2: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];
// -------------Readonly tuples--------------------------------------------------------------------------------------------
//simple example
// define our tuple
var ourTuple3;
// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');
console.log(ourTuple3);
//readonly example
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
// ------------------ Object -------------------------------------------------------------------------------------------------
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log("-----car", car);
var car2 = {
    type: "Toyota",
};
car2.type = "Ford"; // no error
console.log("-----car2", car2);
//   car2.type = 2; // Error: Type 'number' is not assignable to type 'string'.
// Example without an optional property
// const car3: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car3.mileage = 2000;
// Example with an optional property
var car4 = {
    type: "Toyota"
};
car4.mileage = 2000;
console.log("------car4", car4);
//Index Signatures
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
// -------------------
var nameAgeMap1 = {};
nameAgeMap1['Jack'] = 25; // Assigns a number
nameAgeMap1['Mark'] = "Fifty"; // Assigns a string
console.log(nameAgeMap1);
// ------------------ Enum -------------------------------------------------------------------------------------------------
//An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// * Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
0;
console.log(currentDirection); // 0
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
// * Numeric Enums - Initialized , You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North1"] = 1] = "North1";
    CardinalDirections2[CardinalDirections2["East2"] = 2] = "East2";
    CardinalDirections2[CardinalDirections2["South3"] = 3] = "South3";
    CardinalDirections2[CardinalDirections2["West4"] = 4] = "West4";
})(CardinalDirections2 || (CardinalDirections2 = {}));
console.log(CardinalDirections2.North1); // 1
console.log(CardinalDirections2.West4); // 4
//   Numeric Enums - Fully Initialized
//You can assign unique number values for each enum value. Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200
//String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North3"] = "North";
    CardinalDirections3["East3"] = "East";
    CardinalDirections3["South3"] = "South";
    CardinalDirections3["West3"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
//  "North"
console.log(CardinalDirections3.North3);
// logs "West"
console.log(CardinalDirections3.West3);
var carname = "Toyato"; //means - carname : string(CarName) ="Toyato"
var caryear = 2001;
var carmodal = "corolla";
var carobject = {
    name: carname,
    year: caryear,
    modal: carmodal
};
console.log('-------carobject', carobject);
var rectangle = {
    height: 10,
    width: 20
};
console.log("----reactangle", rectangle);
var colorinterface = {
    height2: 30,
    width2: 40,
    color: "pink"
};
// ---------------Union | (OR)------------------------------------------------------------------------
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
function printUnion(code) {
    console.log("my code is ".concat(code, " ...!"));
}
printUnion(404);
printUnion("admin");
//Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:
//  function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'.
//     //Property 'toUpperCase' does not exist on type 'number'
//   }
// ----------------------------Function -----------------------------------------------------------------
// Return Type
// The type of the value returned by the function can be explicitly defined.
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getDate();
}
var funValue = getTime();
console.log("----funValue", funValue);
// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
printHello();
//Parameters
//Function parameters are typed with a similar syntax as variable declarations.
function multiply(a, b) {
    return a * b;
}
multiply(10, 2);
//Optional Parameters
//By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log("------add", add(2, 5));
//Default Parameters
//For parameters with default values, the default value goes after the type annotation:
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(value, exponent);
}
console.log(pow(2));
//Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//Rest Parameters
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function added(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log("----rest", rest);
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
} //  10+10=20      +    10,10----10+10=20 ---20+10=30  -----20+30
console.log(added(10, 10, 3, 5, 4));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
// ------------------------------TypeScript casting----------------------------------------------------------------------------------
//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.
//Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
var x = 'hello';
// console.log(x.length); //error because x is unknown .
console.log(x.length);
// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
var v = 4;
console.log(v.length); // prints undefined since numbers don't have a length // v is holding a number
// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// ----------------------------------------
//Casting with <>
//Using <> works the same as casting with as
var n = 'hello world';
console.log(n.length);
//Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
var w = 'hellow';
// console.log(((w as unknown) as number).length); // w is not actually a number so this will return undefined
