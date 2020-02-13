const UserController = require("../controllers/UsersControllers");
const SessionController = require("../controllers/SessionController");

module.exports = {
  Query: {
    users: () => UserController.index(),
    user: (_, { id }) => UserController.show(id),
    login: (_, { name, password }) => SessionController.show(name, password)
  },
  Mutation: {
    newUser: (_, { data }) => UserController.store(data),
    deleteUser: (_, { id }) => UserController.delete(id),
    updateUser: (_, { data }) => UserController.update(data)
  }
};
