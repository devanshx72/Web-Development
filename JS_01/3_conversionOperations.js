let score = true;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0
// null -> 0
// undefined -> NaN

// *********** Operations ****************
console.log("Operations--------------------");

let value = 33
let negValue = -value;
// console.log(negValue);
// hi = -hi; // Error: hi is not defined


// let str1 = "John";
// let str2 = "Doe";

// let fullName = str1 + " " + str2;
// console.log(fullName);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 1 + "1");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);

let n1, n2, n3;
n1 = n2 = n3 = 2 + 2;

console.log(n1, n2, n3);
n2 += 5; 
console.log(n1, n2, n3);