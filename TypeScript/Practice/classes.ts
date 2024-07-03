// simple class in js
class Hello {

    private name: string;
    private number: number;

    constructor(name: string, number: number) {
        this.name = name
        this.number = number

    }
    setData() {
        console.log(`fom Submit by ${this.name} number ${this.number}`);
    }

}

const myObj = new Hello("purvi", 1234)
myObj.setData()

const myObj2 = new Hello("neha", 5678)
myObj2.setData()



// ------------------TypeScript Classes-----------------

//Members: Types
//The members of a class (properties & methods) are typed using type annotations, similar to variables.
class Person {
    names: string | undefined;
}

const persona = new Person();
persona.names = "Jane";

//   -------------------------------

class Person2 {
    private name3: string;

    public constructor(name: string) {
        this.name3 = name;
    }

    public getName(): string {
        return this.name3;
    }
}

const persons = new Person2("Jane2");
console.log(persons.getName()); // person.name isn't accessible from outside the class since it's private

//   Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

class Persons {
    // name is a private member variable
    public constructor(private name: string) { }

    public getNames(): string {
        return this.name;
        //   return this.name ="my";     we can change here

    }
}

const person2 = new Persons("can");
console.log(person2.getNames());
//   -------------------------------------

//Readonly
//Similar to arrays, the readonly keyword can prevent class members from being changed.

class Card {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
        //   return this.name="world";  can not assign 'name' because it's read only 
    }
}

const obj = new Card("card");
console.log(obj.getName());

//Inheritance: Implements
// Interfaces can be used to define the type a class must follow through the implements keyword.
interface Shape {
    getArea: () => number;
    getName: () => string;
    // myArea: number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width1: number, protected readonly height1: number) { }

    // myArea: number;

    public getArea() {
        return this.width1 * this.height1;
    }

    public getName() {
        return "hjhjkjioj"
    }
}
const myRect = new Rectangle(10, 20);

console.log(myRect.getArea());
console.log(myRect.getName());
// console.log(myRect.myArea = 400)

// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

// ------------Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.
interface Shape2 {
    getArea: () => number;
}

class Rectangles implements Shape2 {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangles {
    public constructor(width: number) {
        super(width, width);
    }
    // getArea gets inherited from Rectangle
}

const mySq = new Square(10);

console.log(mySq.getArea());

//---------------------- Override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword.

interface Shape3 {
    addition(): number
}

class OverRide {
    constructor(protected readonly a: number, protected readonly b: number) { }

    public additon() {
        return this.a + this.b
    }
}
class OverRideClass extends OverRide {
    constructor(a: number) {
        super(a, a)
    }

    public override additon(): number {
        return this.a + 20
    }
}

let overRideObj = new OverRideClass(10)
console.log(overRideObj.additon());


// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class ShapeOfDiagram {
    abstract calculateArea(): number; // Abstract method to calculate area
    abstract displayArea(): void; // Abstract method to display area
}

class Circle2 extends ShapeOfDiagram {
    constructor(protected radius: number) {
        super(); // Constructor of the abstract class must call super()
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius; // Area calculation for circle
    }

    public displayArea(): void {
        console.log(`Circle - Radius: ${this.radius}`);
    }
}

const c1 = new Circle2(5)
console.log(c1.calculateArea());
c1.displayArea()


// ------------------------- Basic Generics------------------------------------------------------------------------------------------------------
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.


function createPair<T>(v1: T): T {
    return v1
}
console.log(createPair<number>(42));
console.log(createPair<string>('hello'));
console.log(createPair<boolean>(true));

//   --------------------------------------

function createPairs<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPairs<string, number>('hello', 42)); // ['hello', 42]


//------ function generic ------

function generic<T, S>(data1: T, data2: S): T & S {
    return {...data1, ...data2}
}

const g = generic({ name: "purvi" }, { id: 1 })
console.log(g);
console.log(g.id);
console.log(g.name);

//--------- Generics Classes-----

class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
// -----------------------------


class Generic3<T>{
    private number1: T | undefined

    constructor(protected val: string){}

    public abc(number1:T){
       return this.number1=number1
    }
    public abcde(){
        return this.val + " " + this.number1
    }
}

const gen = new Generic3<number>("myNumber")
console.log("hhhhh",gen.abc(10));
console.log("iiiii",gen.abcde());


class Gen<S,N> {
    constructor(protected name:S) {}
    private sums:N | undefined;

    public numbers(num:N):N{
        return this.sums= num 
    }
    public concat ():void{
        console.log(`${this.name} add this value ${this.sums}`);
    }

}

const gn = new Gen <string,number>("meera")
gn.numbers(14)
gn.concat()

