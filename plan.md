# TASK 1 - GET request (localhost:3000/users)
## In apps.js
1. Import user data from libs
??2. Now that we have access to the user data. We want to specifically access the user array from the user data (using dot notation)
3. Import the user router from routes folder.
4. Use app.use("/users",usersData) so that when the client searches localhost:3000/users, we run the functio usersData which links to our users.js file in the routes folder.

## In user.js (routes folder)
Introductory Stuff
4. Import express
??5. Express.router
6. Import the user data from the library

GET request stuff
5. GET request (we want the all the user data to be at the /users page)
    - We want it to go to the "/users" path (so this means "/" in the routes folder, but "/users" in the app.js file)
    - Create a function that takes in request & response
    - Create a response Object
        - Shows if it has been success
        - Gives a message
        - Gives the data/payload = user data
    - Send off the response Object as a json
7. Export the route to use it outside the user.js file
    - module.exports = userRouter

# TASK 2 - GET request with ID (localhost:3000/users/:id)

## In users.js (routes folder)
- Create GET request
    - We want it to go to "/users:id" path
    - Create a function that takes in a request and response
    
    The ID stuff
    - Get the ID of the request (using params) (i.e. req.params.id)
    - Set this equal to a variable
    - Create a for loop
        - Inside, create an if statement that says 'If we find the user id that makes the id of the request, then print that user'
        - To do this - create an empty object (outside of for loop)
        - Push the user with the matching ID into this empty object

    ResponseObject
    - Create a response Object
        - Shows if it has been success
        - Gives a message
        - Gives the data/payload = user data
    - Send off the response Object as a json

- module.exports = userRouter

# Task 3 - POST (create new user)
## In users.js 
Create a post request
    - We want it to go from the "/users" path. (so "/" path is we're writing code in the users.js file)
    - Create a function that takes in a req and res

Adding in the new user
    - We want to grab the body of the request (i.e the user that the client wants to add)
    - Set it equal to a variable (i.e. let body = req.body)
    - Add it to the rest of the data (i.e. push it into user payload)
    
    ResponseObject
    - Create a response Object
        - Shows if it has been success
        - Gives a message
        - Gives the data/payload = newly created user object (i.e. body of request)
    - Send off the response Object as a json
- module.exports = userRouter

    ?? - Not sure how to just send the new User as opposed to all of the users

## In apps.js
??Make sure that app.use(express.json()) comes before app.use("/users", usersRouter).
Because otherwise req.body is undefined!

# Task 4 - PUT (update a user)
## In users.js 
- Create a patch request
    - We want it to go to the "/users/<id>" path. (i.e. "/:id" in users.js file)
    - Create a function that takes in a req and response

Updating a user
When the client gives us an id, we want the server to go through every id and find the one that corresponds and replace it.
- Grab the body of the request (i.e. the updated user info) and set it equal to a variable
- Grab the id of the request and set it equal to a variable

- Create For loop
    - If statement that says "if requested ID === one of the user's id"
        - i.e. if(Number(requestedID) === users[i].id)
        - Then replace the older with the new user.
        - i.e. users[i] = req.body;

- Create response Object
    - Success
    - message
    - payload: updated user object
    
- Give back the response Object as a json
- module.exports = userRouter

## Task 5 - DELETE (delete an existing user)
## In users.js 
- Create a DELETE request
    - We want it to go to the "/users/<id>" path. (i.e. "/:id" in users.js file)
    - Create a function that takes in a req and response

The delete bit
When the client requests a specific user (using an id), we want to search through our list of users, find the user with the mathching id an delete it 
- Grab the requested ID and store it in a variable
- Create an empty variable to store our deleted user information.

- For loop 
    - If statement (condition: "if the requested ID matched the ID of a particular user)
    - Place this user into our empty variable

-Splicing the user from the users array
    - Use splice
    - At position (requestedID), remove one item i.e. users.splice((Number(requestedID)-1),1)

Response Object
    - Success:true
    - Message
    - Payload: Empty variable which contains the deleted user info
- Give the reponseobject back as a json

- module.exports = usersRouter