const postTodo = (req, res) => {
    let newItem = {};
    newItem.id = getRandomInt();
    newItem.description = req.body.description;
    newItem.completed = false

    // put it in the database
    db.push(newItem);

    // return the newItem on the response
    res.json(newItem);
    }

    const getAllTodos = (req, res) => {

    }

    const getTodoByID = (req, res) => {

    }

    const deleteTodo = (req, res) => {

    }

    const updateTodo = (req, res) => {

    }

    module.exports = {postTodo, getAllTodos, getTodoByID, deleteTodo, updateTodo}