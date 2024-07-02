
//----------------------Number----------------------------------------------------------------------------------
// valid

let a: number = 15;
let b: number = 3.14;
let c: number = -5;
let d: number = NaN

//  inValid

// let result:number = a + "purvi";
// let result:number="123"


//----------------------String---------------------------------------------------------------------------------
//   any value under single or double quotes are treated as a string

// initialization

let myString: string = "abcd";

//concatination

let fname: string = "vaishali";
let lname: string = 'nikam';

let fullname: string = fname + lname

console.log("-----fullname", fullname);

// find length

let str: string = 'abcdefghijklmnopqr'
let findLength: number = str.length;
console.log("----length", findLength);


//----------------------boolean----------------------------------------------------------------------------------

let isname1: boolean = true;
let isname2: boolean = false;

const isEven = (n: number): boolean => {
    return n % 2 === 0
}
console.log("--boolean fun", isEven(4))

//----------------------BigInt-------------------------------------------------------------------------------------

let maxNum: bigint = 9007199254740992n
console.log("bigint---", maxNum)

//---------------------- any ----------------------------------------------------------------------------------------

let myVar: any = 5;
myVar = "hello"
myVar = -5

// --------------------- unknown ------------------------------------------------------------------------------------
//safer than any

let abc: unknown;
abc = 5;
abc = "hjkffsdf";

// --------------------- never --------------------------------------------------------------------------------------

// let x: never = true ; // Error: Type 'boolean' is not assignable to type 'never'.,  we can't assign to never



// --------------------- Function ------------------------------------------------------------------------------------

function checkHandler(name: string, id: number) {
    console.log(`name is ${name} and id is ${id}`)
}
checkHandler("purvi", 2)

// -------------

function checkHandler2(palin: string): boolean {
    // console.log("object",palin);
    let reversedStr = palin.split('').reverse().join('');
    return palin === reversedStr
}

console.log(checkHandler2("12321"));

// -------------------null and undefined -----------------------------------------------------------------------------

let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);

// ------------------- Array -------------------------------------------------------------------------------------------

let myString1: string[] = [];
myString1.push("hello");
console.log("---myString--", myString1);

let myString2: string[] = ["my", "subject"];
myString2.push("hello");
console.log("---myString--", myString2);


// readonly

let readOnly: readonly string[] = ["abcdef"]
//   readOnly.push("hii") //can't modify in readonly variable
console.log("----readonly", readOnly);



const numbers: number[] = [1, 2, 3]; // inferred to type number[]

numbers.push(4); // no error

// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers);

let head: number = numbers[0]; // no error

console.log(head);

// --------------------Tuple-----------------------------------------------------------------------------------------------

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

// define our tuple
let ourTuple: [number, boolean, string];

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
let ourTuple3: [number, boolean, string];
// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');
console.log(ourTuple3);

//readonly example

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// ------------------ Object -------------------------------------------------------------------------------------------------

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log("-----car", car);

const car2 = {
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
const car4: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};

car4.mileage = 2000;
console.log("------car4", car4);

//Index Signatures

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// -------------------
const nameAgeMap1: { [index: string]: number | string } = {};

nameAgeMap1['Jack'] = 25;    // Assigns a number
nameAgeMap1['Mark'] = "Fifty";   // Assigns a string

console.log(nameAgeMap1);

// ------------------ Enum -------------------------------------------------------------------------------------------------
//An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

// * Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
0
console.log(currentDirection); // 0
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// * Numeric Enums - Initialized , You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections2 {
    North1 = 1,
    East2,
    South3,
    West4
}
console.log(CardinalDirections2.North1); // 1
console.log(CardinalDirections2.West4);  // 4

//   Numeric Enums - Fully Initialized
//You can assign unique number values for each enum value. Then the values will not incremented automatically:
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success);// 200

//String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections3 {
    North3 = 'North',
    East3 = "East",
    South3 = "South",
    West3 = "West"
};
//  "North"
console.log(CardinalDirections3.North3);
// logs "West"
console.log(CardinalDirections3.West3);

//--------------------------------Type Aliases-------------------------------------------------------------------------------------

// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays
type CarName = string
type CarYear = number
type CarModal = string

type CarObj = {
    name: CarName,
    year: CarYear,
    modal: CarModal
}
const carname: CarName = "Toyato" //means - carname : string(CarName) ="Toyato"
const caryear: CarYear = 2001
const carmodal: CarModal = "corolla"

const carobject: CarObj = {
    name: carname,
    year: caryear,
    modal: carmodal
}
console.log('-------carobject', carobject);


// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

// interface Rectangle {
//     height: number,
//     width: number
// }

// const rectangle: Rectangle = {
//     height: 10,
//     width: 20
// }
// console.log("----reactangle", rectangle);

//Extending Interfaces
//Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface Rectangle2 {
    height2: number,
    width2: number
}

interface colorInterface extends Rectangle2 {
    color: string
}

const colorinterface: colorInterface = {
    height2: 30,
    width2: 40,
    color: "pink"
}

// ---------------Union | (OR)------------------------------------------------------------------------
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

function printUnion(code: string | number) {
    console.log(`my code is ${code} ...!`)
}

printUnion(404)
printUnion("admin")

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
function getTime(): number {
    return new Date().getDate();
}
let funValue = getTime()
console.log("----funValue", funValue);

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}
printHello()

//Parameters
//Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
    return a * b;
}
multiply(10, 2)

//Optional Parameters
//By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log("------add", add(2, 5));

//Default Parameters
//For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 2) {
    return value ** exponent;
}
console.log(pow(2));

//Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));


//Rest Parameters
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function added(a: number, b: number, ...rest: number[]) {
    console.log("----rest", rest);
    return a + b + rest.reduce((p, c) => p + c, 0);
}      //  10+10=20      +    10,10----10+10=20 ---20+10=30  -----20+30

console.log(added(10, 10, 3, 5, 4));


//Type Alias
//Function types can be specified separately from functions with type aliases.
//These types are written similarly to arrow functions

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10));


// ------------------------------TypeScript casting----------------------------------------------------------------------------------

 //There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.

//Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let x: unknown = 'hello';

// console.log(x.length); //error because x is unknown .
console.log((x as string).length); 

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let v: unknown = 4;
console.log((v as string).length); // prints undefined since numbers don't have a length // v is holding a number

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// ----------------------------------------

//Casting with <>
//Using <> works the same as casting with as

let n: unknown = 'hello world';
console.log((<string>n).length);

//Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let w = 'hellow';
// console.log(((w as unknown) as number).length); // w is not actually a number so this will return undefined