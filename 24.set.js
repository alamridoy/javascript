// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits.size)


// delete()

// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// let x = fruits.delete('bananas')

// console.log(fruits.has('bananas'))



//        has() ==> return boolean value

// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// let x = fruits.delete('bananas')

// console.log(fruits.has('bananas'))




// forEach()

// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// fruits.forEach(function(key,value){
//     console.log(key,value)
// })








//            entries()
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

for(let x of fruits.entries()){
    console.log(x)
}