// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     },
//     getFullName : function(){
//         return this.fullName()
//     }
//   };
//   console.log(person.getFullName());




//Explicit Function Binding
//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  

console.log(person1.fullName.call(person2));
