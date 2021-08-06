const { createTodo, getAllTodos } = require("../controllers/todo.controller");

const routes = {
  "/api/getAllTodos": {
    method: "GET",
    handler: getAllTodos,
  },
  "/api/createTodo": {
    method: "POST",
    handler: createTodo,
  },
};

const apiRouteHandlers = (req, res) => {
  const route = routes[req.url];
  if (route && route.method === req.method) {
    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Requested route not found." }));
    res.end();
  }
};

module.exports = apiRouteHandlers;
