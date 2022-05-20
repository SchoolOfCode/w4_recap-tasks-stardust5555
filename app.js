import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

//Task 1 - GET request
import userData from "./libs/users.js";
//const users = userData.users
import userRouter from "./routes/users.js";

//Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
