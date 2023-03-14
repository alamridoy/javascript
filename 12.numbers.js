// let x = 0.2 + 0.1;
// let x = (0.2 * 10 + 0.1 * 10) / 10;



// console.log(x)



// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;

// console.log(result)


// let x = 100 / "Apple";
// console.log(isNaN(x))


let x = NaN;
let y = 5;
let z = x + y;
console.log(z)




function checkUndefinedProperty(obj, propName) {
    if (obj.hasOwnProperty(propName)) {
      if (typeof obj[propName] !== "undefined") {
        return obj[propName];
      } else {
        return "Previous value: " + obj[propName];
      }
    } else {
      return "Property does not exist";
    }
  }
  
  // Example usage
  const myObj = { name: "John", age: 30 };
  console.log(checkUndefinedProperty(myObj, "name")); // "John"
  console.log(checkUndefinedProperty(myObj, "city")); // "Property does not exist"
  myObj.age = undefined;
  console.log(checkUndefinedProperty(myObj, "age")); // "Previous value: 30"
  