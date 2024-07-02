var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// simple class in js
var Hello = /** @class */ (function () {
    function Hello(name, number) {
        this.name = name;
        this.number = number;
    }
    Hello.prototype.setData = function () {
        console.log("fom Submit by ".concat(this.name, " number ").concat(this.number));
    };
    return Hello;
}());
var myObj = new Hello("purvi", 1234);
myObj.setData();
var myObj2 = new Hello("neha", 5678);
myObj2.setData();
// ------------------TypeScript Classes-----------------
//Members: Types
//The members of a class (properties & methods) are typed using type annotations, similar to variables.
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.names = "Jane";
//   -------------------------------
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name3 = name;
    }
    Person2.prototype.getName = function () {
        return this.name3;
    };
    return Person2;
}());
var persons = new Person2("Jane2");
console.log(persons.getName()); // person.name isn't accessible from outside the class since it's private
//   Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
var Persons = /** @class */ (function () {
    // name is a private member variable
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.getNames = function () {
        return this.name;
        //   return this.name ="my";     we can change here
    };
    return Persons;
}());
var person2 = new Persons("can");
console.log(person2.getNames());
//   -------------------------------------
//Readonly
//Similar to arrays, the readonly keyword can prevent class members from being changed.
var Card = /** @class */ (function () {
    function Card(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Card.prototype.getName = function () {
        return this.name;
        //   return this.name="world";  can not assign 'name' because it's read only 
    };
    return Card;
}());
var obj = new Card("card");
console.log(obj.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width1, height1) {
        this.width1 = width1;
        this.height1 = height1;
    }
    // myArea: number;
    Rectangle.prototype.getArea = function () {
        return this.width1 * this.height1;
    };
    Rectangle.prototype.getName = function () {
        return "hjhjkjioj";
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
console.log(myRect.getName());
var Rectangles = /** @class */ (function () {
    function Rectangles(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangles.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangles;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangles));
var mySq = new Square(10);
console.log(mySq.getArea());
var OverRide = /** @class */ (function () {
    function OverRide(a, b) {
        this.a = a;
        this.b = b;
    }
    OverRide.prototype.additon = function () {
        return this.a + this.b;
    };
    return OverRide;
}());
var OverRideClass = /** @class */ (function (_super) {
    __extends(OverRideClass, _super);
    function OverRideClass(a) {
        return _super.call(this, a, a) || this;
    }
    OverRideClass.prototype.additon = function () {
        return this.a + 20;
    };
    return OverRideClass;
}(OverRide));
var overRideObj = new OverRideClass(10);
console.log(overRideObj.additon());
// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
var ShapeOfDiagram = /** @class */ (function () {
    function ShapeOfDiagram() {
    }
    return ShapeOfDiagram;
}());
var Circle2 = /** @class */ (function (_super) {
    __extends(Circle2, _super);
    function Circle2(radius) {
        var _this = _super.call(this) || this; // Constructor of the abstract class must call super()
        _this.radius = radius;
        return _this;
    }
    Circle2.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius; // Area calculation for circle
    };
    Circle2.prototype.displayArea = function () {
        console.log("Circle - Radius: ".concat(this.radius));
    };
    return Circle2;
}(ShapeOfDiagram));
var c1 = new Circle2(5);
console.log(c1.calculateArea());
c1.displayArea();
// ------------------------- Basic Generics------------------------------------------------------------------------------------------------------
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
function createPair(v1) {
    return v1;
}
console.log(createPair(42));
console.log(createPair('hello'));
console.log(createPair(true));
//   --------------------------------------
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs('hello', 42)); // ['hello', 42]
//------ function generic ------
function generic(data1, data2) {
    return __assign(__assign({}, data1), data2);
}
var g = generic({ name: "purvi" }, { id: 1 });
console.log(g);
console.log(g.id);
console.log(g.name);
//--------- Generics Classes-----
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
// -----------------------------
var Generic3 = /** @class */ (function () {
    function Generic3(val) {
        this.val = val;
    }
    Generic3.prototype.abc = function (number1) {
        return this.number1 = number1;
    };
    Generic3.prototype.abcde = function () {
        return this.val + " " + this.number1;
    };
    return Generic3;
}());
var gen = new Generic3("myNumber");
console.log("hhhhh", gen.abc(10));
console.log("iiiii", gen.abcde());
var Gen = /** @class */ (function () {
    function Gen(name) {
        this.name = name;
    }
    Gen.prototype.numbers = function (num) {
        return this.sums = num;
    };
    Gen.prototype.concat = function () {
        console.log("".concat(this.name, " add this value ").concat(this.sums));
    };
    return Gen;
}());
var gn = new Gen("meera");
gn.numbers(14);
gn.concat();
