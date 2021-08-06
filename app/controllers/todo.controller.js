const Todo = require("../models/todo.model");

const getAllTodos = async (req, res) => {
  const todos = await Todo.findAll();

  if (todos.length) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(todos));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: `No todos found!` }));
    res.end();
  }
};

const createTodo = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const { todo } = JSON.parse(body);
    await Todo.create(todo);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(todo));
    res.end();
  });
};

module.exports = {
  getAllTodos,
  createTodo,
};
