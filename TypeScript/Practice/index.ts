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

function addition(a: number, b: number): number { // param a must be number, param b and function also must be number, because function returns number
    return a + b;
}

console.log("----typescript fun", addition(10, 10));


// ---------------------------------Utility Types-----------------------------------------------------------------------------------
// Partial
// Partial changes all the properties in an object to be optional.
interface Point {
    x: number;
    y: string;
}

let pointPart: Partial<Point> = { // `Partial` allows x and y to be optional
    x: 10
};
console.log(pointPart);

//   ---------------------

// Required
// Required changes all the properties in an object to be required.

interface Car {
    make: string;
    model: string;
    mileage?: number; // it's optional but still this required to define
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);


// -----------------------------
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

const nameAgeMaps: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMaps);

// ---------------------------------

// Omit
// Omit removes keys from an object type.

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob1: Omit<Person, 'age' | 'location'> = {
    name: 'Bob',
    // location:"surat"

    // `Omit` has removed age and location from the type and they can't be defined here
};

console.log(bob1);
// -------------------------------
//   Pick
// Pick removes all but the specified keys from an object type.
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob2: Pick<Person, 'age'> = {
    //   name: 'Bob',
    age: 22,
    //   location:"surat"
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob2);
// ------------------------------

// Exclude
// Exclude removes types from a union.
type Primitive = string | number | boolean;

const values: Exclude<Primitive, string> = 11;
// const values: Exclude<Primitive, string> = 'djhlcvdvnj'; //invalid
// const values: Exclude<Primitive, string> = true;  valid
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof values);


// ReturnType
// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};
// ==============
type NumberGenerator = () => number;

const generateNumber: NumberGenerator = () => {
    return 42;
};

const result: ReturnType<NumberGenerator> = generateNumber();
console.log(result); // Output: 42

// Parameters
// Parameters extracts the parameter types of a function type as an array.

type PointPrinter = (p: { x: number; y: string; }) => void;

const points: Parameters<PointPrinter>[0] = {
    x: 10,
    y: '10',
};
console.log(points);

// --------------------------------
// Readonly
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Person3 {
    name: string;
    age: number;
}
const persone: Readonly<Person3> = {
    name: "Dylan",
    age: 35,
};
//   persone.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.

// --------------------TypeScript Keyof----------------------------------------------------------------------------------------------------------
// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

// keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.

// interface Person {
//     name: string;
//     age: number;
//   }
  
//   // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
//   function printPersonProperty(person:Person,property:string | number) {
//     console.log(`${property} is  ${person[property]}`);
//   }
  
//   let person = {
//     name: "Max",
//     age: 27
//   };
  
//   printPersonProperty(person,"age"); // Printing person property name: "Max"s
//   printPersonProperty(person,"name"); // Printing person property name: "Max"s

interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  let person = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person, "name"); // Printing person property name: "Max"
//   -----------------------------------------
interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house?.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
  
  let home: House = {
    sqft: 500,
    yard:{
        sqft:400
    }
  };
  
  printYardSize(home); // Prints 'No yard'

//   ---------------------------

// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }
              
//   printMileage(null); // Prints 'Mileage: Not Available'
  
  printMileage(0); // Prints 'Mileage: 0'
  