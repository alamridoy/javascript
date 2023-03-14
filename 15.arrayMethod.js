
//toString()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())
// console.log(fruits)

// const val = [2,4,3,55,4]
// console.log(val.toString())
// console.log(typeof(val))



//Join()
// let message = ["JavaScript", "is", "fun."];
// let res = message.join('|')
// console.log(res)

//pop
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.pop();
// console.log(res)
// console.log(fruits)



//shift()
// let languages = ["English", "Java", "Python", "JavaScript"];
// let res  = languages.shift()
// console.log(res)
// console.log(languages)



//unshift()
// let languages = ["English", "Java", "Python", "JavaScript"];
// let res = languages.unshift('Programming','Games')
// console.log(languages)
// console.log(res)




//sort()
// let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// let res = city.sort()
// console.log(res)

// let priceList = [1000, 50, 2, 7, 14];

// let ans = priceList.sort(function(a,b){
//     return a-b;
// })
// console.log(ans);


// //reverse()
// console.log(ans.reverse())



//forEach()
// let numbers = [1, 3, 4, 9, 8];
// function myfun(e){
//     console.log(e*e)
// }
// numbers.forEach(myfun)





//map()
// let numbers = [1, 3, 4, 9, 8];
// function myfun(e){
//     return e*e;
// }
// let res = numbers.map(myfun);
// console.log(res)



//filter()
// let numbers = [1, 3, 4, 9, 8,11,17,20]

// function myfun(num){
//     if (num %2 == 0)
//         return true
//     else 
//       return false
// }

// let res = numbers.filter(myfun)
// console.log(res)




//reduce()
// const message = ["JavaScript ", "is ", "fun."];


// function joinStrings(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// let joinedString = message.reduce(joinStrings);
// console.log(joinedString);




//reduceRight()

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum)



//every()
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18)



//indexOf()

// let languages = ["Java", "JavaScript", "Python", "JavaScript","JavaScript"];
// let index = languages.lastIndexOf("JavaScript");
// console.log(index);

// defining an array
// let numbers = [1,  4, 5];

// // each element of the array is squared and later flattened
// const resultingArray = numbers.flatMap((x) => [x ** 2]);

// console.log(resultingArray);

// Output:
// [ 1, 4, 9, 16, 25 ]