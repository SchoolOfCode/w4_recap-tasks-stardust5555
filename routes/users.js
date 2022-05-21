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

//module.exports = usersRouter;

//Task 2 - GET request ID
usersRouter.get("/:id", function (req, res){
    const requestedID = req.params.id;
    let requestedUser = {};

    for (let i = 0; i < users.length; i++) {
        if (Number(requestedID) === users[i].id){
            requestedUser = users[i];
            break;
        }  
    }

    const responseObject ={
        success:true,
        message: `You requested the user with an id of ${requestedID}`,
        payload: requestedUser
    }
    res.json(responseObject);
})

module.exports = usersRouter;