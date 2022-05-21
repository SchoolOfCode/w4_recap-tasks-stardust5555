// Introductory stuff
const express = require("express");
const usersRouter = express.Router();
const users = require("../libs/users.js");

//Task 1 - GET request
usersRouter.get("/", function (req, res){
    const responseObject = {
        success: true,
        message: `You've reached the root path. Here's all the user data`,
        payload: users,
    };
    res.json(responseObject);
})

module.exports = usersRouter;