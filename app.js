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

app.use("/users", usersRouter);    //



//Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
