// using var
var r = 5;
var p = 10;
var r = 10;
var z = r + p;
var z = r + p +3;
console.log(z)



//using let and const
const a = 30;
const b = 20;

let total = a + b;
console.log(total)



//const can change the elements of a constant array:

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars)