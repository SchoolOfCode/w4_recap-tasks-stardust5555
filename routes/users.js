// Introductory stuff
import express from "express";
const userRouter = express.Router();
import users from "../libs/users.js";

//Task 1 - GET request
userRouter.get("/", function (req,res){
    const responseObject = {
        success:true,
        message: `You've reached the root path. Here's all the user data`,
        payload: users,
    }
    re.json(responseObject)
})

export default userRouter