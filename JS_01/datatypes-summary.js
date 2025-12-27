// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const str = "Hello, World!"; // String
const num = 42; // Number
const floatNum = 3.14; // Number (floating point)
const isLoggedIn = true; // Boolean
const nll = null; // null
let undef; // undefined
const sym = Symbol("unique"); // Symbol
const bigInt = 9007199254741991n; // BigInt

// Reference (Non-primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Nagraj", "Doga"]; // Array

let myObject = {
    name: "John Doe",
    age: 30,
    isAdmin: false
} // Object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof str); // "string"

// typeof tells the datatype of the variable