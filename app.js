const express = require("express");
// import {
//   getUserByID,
//   getUsers,
//   createUser,
//   updateUserByID,
//   deleteUserByID,
// } from "./models/users.js";
const PORT = 3000;
const app = express();

//Task 1 - GET request 
const userData =  require("./libs/users.js");
const users = userData.users;
const usersRouter = require("./routes/users.js");





//Middleware
app.use(express.json());
app.use("/users", usersRouter);    

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
