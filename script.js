// File extension for JavaScript is .js

// Data Types
// 1. Numbers  (both +ve and -ve) -> 10, 20, 10.9, 11.967, 3.14857, -56, -7.89
// Whole numbers (Integer) - 10, 20
// Floating Point (Floats) - 3.14857, 7.89

// 2. Strings -> "Charles Swaleh", "toyota", "space_x", 'Michael Joseph'

// 3. Booleans -> true, false

// 4. Null (a special keyword) -> data hasn't been assigned yet. A non-existent value

// 5. Undefined -> no value assigned.

// TODO
// 6. Object
let cars = { type: "Sidan", mode: "volvo", fuel: "Petrol" };
console.log("Cars is type: " + typeof cars);

// 7.
// TODO TEACHER EXPLAIN

// 8. BigInt
let x = 9007199254740995n;
console.log("x is type: " + typeof x);

// Variable - a store or a placeholder for a value within a certain datatype
// var, let, const

// var was the initial way of declaring variables but had some issues.
// Issue - variables could be redeclared causing potential issues in the code
// DISCLAIMER - DO NOT USE var TO DECLARE YOU VARIABLES!!!!!
var name = "Charles Swaleh";

// let
// Does not allow for variable re-declaration
// let is used when you know the value of your variable will change later in the code
let farouk = "Farouk Abdi";
farouk = "Charles Swaleh";

// const - short for constant
let charles = "Charles Swaleh";
charles = "Farouk Abdi"; // THIS WILL THROW AN ERROR - Uncaught TypeError: Assignment to constant variable.

// Variable Naming conventions
// 1. Name your variable according to what it is or what it does
name = "Charles";
// 2. For long variable names, use the camelCase
let dateOfBirthForCharles = "28-06-1990";
let dateOfBirthForChristine = "28-06-1990";
// let generalElectionsDataFor2023 = {[]}

// 3. use ALL CAPS for any constant variable
const AGE = 10;
const YEAR_OF_INDEPENDENCE = 1963;

// Math operators in JavaScript
// Addition +
// Subtraction -
// Division /
// Multiplication *

// TODO
// Javascript Dates
const date = new Date();
console.log(date);

// 9. Javascript Reserved Names (Keywords) var, let, const, null, undefined, true, false, NaN
