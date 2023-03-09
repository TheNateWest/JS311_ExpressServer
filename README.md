# JS311_ExpressServer

We're going to build our own todo app with our own api interface and our own data.

we're building a todo backend and here is what we want to support:

- route that returns all the todos in our list
    GET /todos
    return and array of todo objects

- route that returns a single todo based on the id provided
    GET /todos/:id
        :id is the id of the todo to return if it exists
        otherwise, return message "Id not found"

- route that will delete a single todo based on the id provided
    DELETE /todos/:id
        :id is the id of the todo that was deleted
        return message with the item that was deleted

- route that adds a single todo to the list
    POST /todos
        body should include an object that has at least a description.
        we'll make a function that generates a random id that's added when the new todo is created
        ex: body: {"description" : "feed the dog".
                    "completed": false}

- route that updates an existing todo based on the id provided
    PUT /todos/:id
    ex: /todos/10, body= {"description": "buy groceries", "completed":true}

POST and PUT use the body

todo object should have:
- id : if of the todo item
- description : what the todo is
- completed : true or false

***************

HOW WE'RE GOING TO GENERATE A RANDOM ID

Math.random() // generates a random number between 0 and 1
0
0.001
0.4655748
0.69873546983643565
1 // it will NEVER return 1

0.69873546983643565 * 100000
698735.46983643565
Math.floor(698735.46983643565) = 698735