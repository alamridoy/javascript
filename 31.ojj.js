let person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  
  Object.defineProperty(person,'firstName',{
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(person.firstName);
console.log(person);




person.firstName = 'John'
console.log(person.firstName)
console.log(person)