// //code-1

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

let reqUser = {
    userName : 'Shovon',
}

function getInfo(reqUser = {}) {
  for(let i = 0; i < userList.length; i++) {
      if(userList[i].user_name === reqUser.userName) {
          return {
              User_Name :  userList[i].user_name,
              Full_Name: userList[i]["Full Name"],
              Phone_Number: userList[i].Phone_number
          };
      }
  }
  return { error: "User not found!" };
}

console.log(getInfo(reqUser));












