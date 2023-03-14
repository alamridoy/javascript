//code-2

let userList = [
    {
        "user_name" :   "Ashraful",
        "Full Name" :   "Md. Ashraful",
        "Phone_number" : ["011", "451", "461"]
    },
    {
        "user_name" :   "Shovon",
        "Full Name" :   "Shovon lal",
        "Phone_number" : ["013", "452", "462"]
    },
    {
        "user_name" :   "Jafry",
        "Full Name" :   "Jafry Deep",
        "Phone_number" : ["012", "453", "463"]
    }
];




let userReq = {
  username: 'Kamal',
  fullName: 'Jamal',
  phoneNumber: 
};

function addUser(userReq = {}) {
  if (!userReq.hasOwnProperty('username') || !userReq.hasOwnProperty('fullName') 
  || !userReq.hasOwnProperty('phoneNumber') || !Array.isArray(userReq.phoneNumber) ||
   userReq.phoneNumber.length === 0)  {
    return 'Invalid input';
  }

  if(userReq.username.trim() === '' || userReq.fullName.trim() === ''){
    return 'Name or Full Name can not be empty';
  }

  let userFound = false;
  for (let i = 0; i < userList.length; i++) {
    if (userList[i]["user_name"] === userReq.username || JSON.stringify(userList[i]["Phone_number"]) === JSON.stringify(userReq.phoneNumber)) {
      userFound = true;
      break;
    }
  }

  if (!userFound) {
    let newUser = {
      "user_name": userReq.username,
      "Full Name": userReq.fullName,
      "Phone_number": userReq.phoneNumber
    };
    userList.push(newUser);
    return 'Successfully created';
  } else {
    return 'User already exists';
  }
}

console.clear();
console.log(addUser(userReq));
console.table(userList);










































// for(let i=0;i<=userList.length;i++){
//     function checkUser(userReq={}){
//         if(userList[i].user_name === userReq.userName &&userList[i]['Full Name'] === userReq.fullName && userList[i].Phone_number  == userReq.phoneNumber){
//             throw console.error('User already stored');
//         }
//     }

// }
// let newuser = {
//     userName : user_name,
//     fullName : ['Full Name'],
//     phoneNumber : Phone_number
// }

// let userReq = {
//     username : 'Shovon  ',
//     fullName : 'Jafry Deep',
//     phoneNumber : '436342625',

// }
// function addUser(userReq={}) {
//     let userFound = false;
//     for (let i = 0; i < userList.length; i++) {
//       if(userList[i]["user_name"] === userReq.username || userList[i]["Phone_number"] === userReq.phoneNumber){
//         userFound = true;
//         break;
//       }
//     }
//     let newUser = {
//       "user_name": userReq.username,
//       "Full Name": userReq.fullName,
//       "Phone_number": userReq.phoneNumber
//     };
//     if (!userFound){
//         userList.push(newUser);
//       }
//         return 'successfully create';
          
//   }
   
// console.clear();
// addUser(userReq);
// console.table(userList)














//   let userList = [
//     {
//         "user_name" :   "Ashraful",
//         "Full Name" :   "Md. Ashraful",
//         "Phone_number" : ["011", "451", "461"]
//     },
//     {
//         "user_name" :   "Shovon",
//         "Full Name" :   "Shovon lal",
//         "Phone_number" : ["013", "452", "462"]
//     },
//     {
//         "user_name" :   "Jafry",
//         "Full Name" :   "Jafry Deep",
//         "Phone_number" : ["012", "453", "463"]
//     }
// ];

// let userName={}
// let userReq = {
//     userName : 'Shovon',
//     fullName : 'Shovon lal',
//     phoneNumber : ' ["011", "451", "461"]',

// }

// function checkUserExists(userReq = {}) {
//     for (let user of userList) {
//       if (user.user_name === userReq.userName && user["Full Name"] === userReq.fullName && user.Phone_number === userReq.phoneNumber) {
//         throw new Error("User already exists!");
//       }
//       else{

//       }
//     }
//   }
  

//   try {
//     checkUserExists(userReq);
//     console.log("User does not exist!");
//   } catch (error) {
//     console.log(error.message);
//   }
  
//   function addUser(userReq) {
   
//     checkUserExists(userReq);
//     userList.push({
//       "user_name": userName,
//       "Full Name": fullName,
//       "Phone_number": phoneNumber
//     });
//   }
  
//   // Example usage
//   try {
//     addUser(userReq);
//     console.log("User added successfully!");
//   } catch (error) {
//     console.log(error.message);
//   }
  













// let userReq = {
//   username: 'Ahmed',
//   fullName: ' ',
//   phoneNumber: ["012", "453"]
// };

// function addUser(userReq = {}) {
//   if (!userReq.hasOwnProperty('phoneNumber') || !Array.isArray(userReq.phoneNumber)) {
//     return 'Invalid phone number';
//   }

//   let userFound = false;
//   for (let i = 0; i < userList.length; i++) {
//     if (userList[i]["user_name"] === userReq.username || JSON.stringify(userList[i]["Phone_number"]) === JSON.stringify(userReq.phoneNumber)) {
//       userFound = true;
//       break;
//     }
//   }

//   if (!userFound) {
//     let newUser = {
//       "user_name": userReq.username,
//       "Full Name": userReq.fullName,
//       "Phone_number": userReq.phoneNumber
//     };
//     userList.push(newUser);
//     return 'Successfully created';
//   } else {
//     return 'User already exists';
//   }
// }

// console.clear();
// console.log(addUser(userReq));
// console.table(userList);






































// let username= {}
// let userRequest={
//     username:'Ridoy',
//     fullName:'Alam Ridoy',
//     phoneNumber:[323,4556,3255]
// };


// function findUser(userRequest) {
    
//     for (let i = 0; i < userList.length; i++) {
//       if (userList[i].user_name === username && userList[i]['Full Name'] === fullName && userList[i].Phone_number === phoneNumber) {
//         return userList[i];
//       }
//     }
    
//   }
//   function getUserInfo(userRequest) {
    
//     let user = findUser(userRequest);
//     if (user) {
//       return {
//         username: user.user_name,
//         fullName: user["Full Name"],
//         phoneNumber: user.Phone_number
//       };
//     } else {
//        console.log('User not found');
//     }
//   }
  
//   function addUser(req = {}) {
    
//     let user = findUser(req.user_name);
//     if (user) {
//       throw new Error("User already exists.");
//     }
  
  
//     let newUser = {
//     username: user_name,
//     fullName: "Full Name",
//     phoneNumber: Phone_number
//     };
//     userList.push(newUser);
//     return newUser;
//   }
// addUser(userRequest)
  
// console.log(userList); 