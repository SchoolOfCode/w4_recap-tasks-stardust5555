# TASK 1 - GET request
## In apps.js
1. Import user data from libs
??2. Now that we have access to the user data. We want to specifically access the user array from the user data (using dot notation)
3. Import the user router from routes folder.

## In user.js (routes folder)
Introductory Stuff
4. Import express
??5. Express.router
6. Import the user data from the library

GET request stuff
5. GET request (we want the all the user data to be shown on the root page)
    - We want it to go from root path
    - Create a function that takes in request & response
    - Create a response Object
        - Shows if it has been success
        - Gives a message
        - Gives the data/payload = user data
    - Send off the response Object as a json
7. Export the route to use it outside the user.js file
