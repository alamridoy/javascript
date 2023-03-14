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


function updateUserDetails(userList, username, fullname, phoneNumber) {
    let userExists = false;
    let updatedUserList = userList.map((user) => {
      if (user["user_name"] === username) {
        userExists = true;
        return {
          ...user,
          "Full Name": fullname || user["Full Name"],
          "Phone_number": Array.isArray(phoneNumber) ? phoneNumber : user["Phone_number"]
        };
      } else {
        return user;
      }
    });
  
    if (!userExists) {
      throw new Error("User does not exist in the list.");
    }
  
    return updatedUserList;
  }
  