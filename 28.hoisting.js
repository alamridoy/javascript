
// x = 5;
// console.log(x)   // hoisting working var 
// var x;


// x = 5;
// console.log(x)   // hoisting not working working let 
// let x;


// Using a let variable before it is declared will 
//result in a ReferenceError.

//The variable is in a "temporal dead zone" from the start of the block until it is declared:




let x;
let y;
x = 10;

console.log(x,y);

y=5;