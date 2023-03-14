let userList = [
    {
        "user_name" :   "Ashraful",
        "fullName" :   "Md. Ashraful",
        "Phone_number" : ["011", "451", "461"]
    },
    {
        "user_name" :   "Shovon",
        "fullName" :   "Shovon lal",
        "Phone_number" : ["013", "452", "462"]
    },
    {
        "user_name" :   "Jafry",
        "fullName" :   "Jafry Deep",
        "Phone_number" : ["012", "453", "463"]
    }
];


let userRequest = {
  username: "Shovon",
  fullName: "Shovon lal chokborty",
  phoneNumber : []
}

function updateUserList(userRequest = {}) {
    let userFound = false;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].user_name === userRequest.username) {
        if (
          userRequest.hasOwnProperty("fullName") &&
          userRequest.fullName.trim() !== ""
        ) {
          userList[i].fullName = userRequest.fullName;
          userFound = true;
        }
      
        if (
          userRequest.hasOwnProperty("phoneNumber") &&
          Array.isArray(userRequest.phoneNumber)  && 
          userRequest.phoneNumber.length > 0
        ) {
          userList[i].Phone_number = userRequest.phoneNumber;
          userFound = true;
        }
      }
    }
  
    if (!userFound) {
      console.log("Error");
    }
    return userList;
  }
  
  console.table(userList);
  updateUserList(userRequest);
  console.table(userList);
  







  


// let userRequest = {
//   username: "Shovon rert",
//   fullName: "Shovon lal chokborty",
//   phoneNumber : ['566666675']
// }

// function updateUserList(userRequest = {}) {
//   let userFound = false;
//   for (let i = 0; i < userList.length; i++) {
//     if (userList[i].user_name === userRequest.username) {
//       if (
//         userRequest.hasOwnProperty("fullName") &&
//         userRequest.fullName.trim() !== ""
//       ) {
//         userList[i].fullName = userRequest.fullName;
//         userFound = true;
//       }

//       if (
//         userRequest.hasOwnProperty("phoneNumber") &&
//         Array.isArray(userRequest.phoneNumber) &&
//         userRequest.phoneNumber.length > 0 // added check for non-empty array
//       ) {
//         userList[i].Phone_number = userRequest.phoneNumber;
//         userFound = true;
//       } else if (
//         userRequest.hasOwnProperty("phoneNumber") &&
//         Array.isArray(userRequest.phoneNumber) &&
//         userRequest.phoneNumber.length === 0 // added check for empty array
//       ) {
//         return("Phone number cannot be empty");
//       }
//     }
//   }

//   if (!userFound) {
//     console.log("Error");
//   }
//   return userList;
// }

// console.table(userList);
// updateUserList(userRequest);
// console.table(userList);










































  // let username={}
// let userRequest = {      // change info
//      username: "Shovon",
//      fullName: " ",
//      phoneNumber: '017382594396'
//      };



// function updateUserList(userRequest={}) {
//     let userFound = false;     // initial user not found
//     for (let i = 0; i < userList.length; i++) {    //check username and update
//       if (userList[i].user_name === userRequest.username) {
//         if(userRequest.fullName!==undefined || !userRequest.fullName){
//              userList[i].fullName = userRequest.fullName 
//              //userList[i].Phone_number =  userRequest.phoneNumber 
//              userFound = true;

//             }
//         if(typeof userRequest.phoneNumber!==undefined || !userRequest.Phone_number){
//             userList[i].Phone_number =  userRequest.phoneNumber 
//              userFound = true;
//         }
//         }
//         else{
//             userList[i].fullName=userList[i].fullName;
//             userList[i].Phone_number =userList[i].Phone_number

//         }
//       }
   

//     if (!userFound) {     
//     console.log('Error')
//     }
//     return userList;
//   }


// console.table(userList);    
// updateUserList(
//     userRequest
    
// ); 

// console.table(userList);    

