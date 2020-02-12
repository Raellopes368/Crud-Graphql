const UserController = require("../controllers/UsersControllers");

module.exports = {
  Query: {
    users: () => UserController.index(),
    user: (_, { id }) => UserController.show(id)
  },
  Mutation: {
    newUser: (_, { data }) => UserController.store(data),
    deleteUser: (_, { id }) => UserController.delete(id),
    updateUser: (_, { data }) => UserController.update(data)
  }
};
