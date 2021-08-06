const todoList = ["todo", "list"];

const findAll = async () => {
  return new Promise((resolve, reject) => {
    resolve(todoList);
  });
};

const create = async (todo) => {
  return new Promise((resolve, reject) => {
    todoList.push(todo);
    resolve(todo);
  });
};

module.exports = {
  findAll,
  create,
};
