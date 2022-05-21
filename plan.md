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


# TASK 2 - GET request with ID (localhost:3000/users/:id)

## In users.js (routes folder)
- Create GET request
    Creating the GET request
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