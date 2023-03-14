
//code-4

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


function deleteUser(userName) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].user_name === userName) {
        userList.splice(i, 1); 
        console.log(`User ${userName} has been deleted.`);
        
      }
    }
    console.log(`User ${userName} not found.`);
  }
  
  console.log("1: " + userList.length)
  deleteUser("Shovon"); 
  console.log("2: " + userList.length)
