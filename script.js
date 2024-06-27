console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");

var a = 10;
console.log(a);
a = "Name"; // Removed 'var' to avoid redeclaration
console.log(a);

let Name = "John"; // Note: Changed variable to 'Name'
console.log(name); // This will log an undefined variable 'name', which should be 'Name'

const pi = 3.14;

let valueOne = 2;
let valueTwo = "a";

console.log(valueOne + valueTwo); // This will output "2a"

console.log(valueOne + parseInt(valueTwo)); // parseInt("a") is NaN

const name2 = "John"; // Changed variable name
const Age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
var y;

console.log(typeof name2);
console.log("My name is " + name2 + " and I am " + age); // 'age' should be 'Age'
console.log(`My name is ${name2} and I am ${age}`);

// Arrays
let arrayOne = ["John", 30, true, null, undefined];

console.log(arrayOne);

// push
arrayOne.push("Apple");
console.log(arrayOne);

// pop
arrayOne.pop();
console.log(arrayOne);

// unshift
arrayOne.unshift("Mango");
console.log(arrayOne);

console.log(arrayOne[0]);

arrayOne[3] = "Banana";
console.log(arrayOne);

console.log(arrayOne.length);

// splice
arrayOne.splice(3, 2);
console.log(arrayOne);

let valueOneStr = "2";
let valueTwoNum = 2;

console.log(valueOneStr == valueTwoNum); // true, type coercion
console.log(valueOneStr === valueTwoNum); // false, strict equality

// Conditional statements
if (isCool) {
    console.log("isCool is true");
} else {
    console.log("isCool is false");
}

if (Age > 50) { // 'age' should be 'Age'
    console.log("Age is greater than 50");
} else {
    console.log("Age is 50 or less");
}

// Ternary operator
let ageCheck = 20; // Changed variable name to avoid redeclaration
let type = (ageCheck >= 18) ? "Adult" : "Minor";

console.log(type);

console.log("Function");

function showString() {
    console.log("Hello World");
}
showString();

var showString = function() {
    console.log("Hello World");
};

showString();

var showString = () => {
    console.log("Arrow Function Hello World");
};

showString();

// Map
var number = [1, 2, 3, 4, 5];

var square = number.map(num => {
    return num * num;
});

console.log(square);

var fruits = ["Apple", "Orange", "Mango"];
var upperCase = fruits.map(fruit => {
    return fruit.toUpperCase();
});

console.log(upperCase);

// Destructuring
var person = {
    name: "Leela",
    age: 20,
    isStudent: true
};
var { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// Promises
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

