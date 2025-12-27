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




// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack vs Heap Memory

// Primitive data types are stored in Stack memory
// Reference data types (Non-primitive) are stored in Heap memory

let myName = "Devansh Sharma" // stored in Stack
let otherName = myName;
console.log(myName);

otherName = "John Doe";

console.log(myName);

let user1 = {
    name: "Devansh Sharma",
    age: 20
} // stored in Heap

let user2 = user1; // user2 stores the reference to the object in Heap

console.log(user1.name); // Devansh Sharma

user2.name = "John Doe"; // Modifying the object via user2 reference

console.log(user1.name);
console.log(user2.name);
