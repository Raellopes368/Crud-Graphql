const { GraphQLServer } = require("graphql-yoga");
const { resolve } = require("path");
const resolvers = require("./app/resolver/Resolver");
const auth = require("./app/middlewares/auth");

class App {
  constructor() {
    this.server = new GraphQLServer({
      typeDefs: [resolve(__dirname, "app", "graphql", "schema.graphql")],
      resolvers,
      context: req => ({ ...req }),
      middlewares: [auth]
    });
  }
}

module.exports = new App().server;
